import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  FileStack,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Upload,
  Eye
} from "lucide-react";

import {
  statusClasses,
  statusLabel,
  type TrackedFile
} from "@/lib/mock-data";

import {
  getSession,
  type Session
} from "@/lib/session";

import { toast } from "sonner";
console.log ("Dashboard rendered");

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Stat({
  icon: Icon,
  label,
  value,
  hint
}:{
  icon:any;
  label:string;
  value:string;
  hint:string;
}){

return(

<Card className="p-5">

<div className="flex justify-between">

<div>

<p className="text-xs text-muted-foreground uppercase">
{label}
</p>


<h2 className="text-3xl font-semibold mt-2">
{value}
</h2>


<p className="text-xs text-muted-foreground">
{hint}
</p>


</div>


<div className="size-10 rounded-md bg-primary/10 grid place-items-center">
<Icon className="size-5"/>
</div>


</div>

</Card>

)

}




function Dashboard(){
  


const navigate = useNavigate();


const [session,setSession] =
useState<Session|null>(null);


const [files,setFiles] =
useState<TrackedFile[]>([]);

const updateStatus = async(
fileId:number,
status:string,
reason?:string
)=>{


if(!session)return;


try{


const res = await fetch(
`http://localhost:8000/api/files/${fileId}/status`,
{

method:"PUT",

headers:{

Authorization:`Bearer ${session.token}`,

Accept:"application/json",

"Content-Type":"application/json"

},


body:JSON.stringify({
status,
reason
})


});


const data = await res.json();



if(!res.ok){

toast.error(data.message);

return;

}



toast.success(
"Status updated"
);



setFiles(prev=>

prev.map(file=>

file.id===fileId

?

{
...file,
status:status as any
}

:

file

)

);



}

catch{

toast.error(
"Update failed"
)

}



}


useEffect(()=>{


const s=getSession();


if(!s){

navigate({to:"/auth"});
return;

}


setSession(s);


},[]);





useEffect(()=>{


if(!session)return;


fetch(
"http://localhost:8000/api/files",
{

headers:{

Authorization:`Bearer ${session.token}`,

Accept:"application/json"

}

}

)

.then(res=>res.json())

.then(data=>{


setFiles(data);


})

.catch(()=>{

toast.error(
"Cannot load files"
);


});



},[session]);





if(!session)return null;



const isStudent =
session.role==="student";


const total = files.length;


const pending =
files.filter(
f=>f.status==="pending"
).length;



const review =
files.filter(
f=>f.status==="in_review"
).length;



const approved =
files.filter(
f=>f.status==="approved"
).length;




return(


<AppShell

title={
isStudent
?
`Welcome ${session.name}`
:
"Dashboard"
}


subtitle={

isStudent

?
"Manage your documents and track your requests"

:

"Administrative document workflow"

}

>


{/* ================= STUDENT ================= */}


{

isStudent ? (


<>


<div className="grid gap-4 md:grid-cols-4">


<Stat

icon={FileStack}

label="Submitted"

value={String(total)}

hint="My documents"

/>



<Stat

icon={Clock}

label="Pending"

value={String(pending)}

hint="Waiting review"

/>



<Stat

icon={AlertTriangle}

label="In Review"

value={String(review)}

hint="Processing"

/>



<Stat

icon={CheckCircle2}

label="Approved"

value={String(approved)}

hint="Completed"

/>


</div>




<Card className="mt-6 p-5">


<h2 className="font-semibold">
Student Actions
</h2>


<p className="text-xs text-muted-foreground">
Quick access to your services
</p>



<div className="mt-4 grid gap-3 md:grid-cols-2">


<Button asChild>

<Link to="/upload">

<Upload className="mr-2 size-4"/>

Upload Document

</Link>

</Button>




<Button variant="outline" asChild>

<Link to="/files">

<FileStack className="mr-2 size-4"/>

My Files

</Link>

</Button>





<Button variant="outline" asChild>

<Link to="/tracking">

<Clock className="mr-2 size-4"/>

Track Requests

</Link>

</Button>




<Button variant="outline" asChild>

<Link to="/search">

<Eye className="mr-2 size-4"/>

Search Documents

</Link>

</Button>



</div>


</Card>





<Card className="mt-6 p-5">


<h2 className="font-semibold">
Recent Uploads
</h2>



<div className="mt-4 space-y-3">


{
files.map(file => (


<div
key={file.id}
className="flex justify-between items-center"
>


<div>


<Link
to={`/file/${file.id}`}
className="font-medium hover:underline"
>

{file.title}

</Link>


<p className="text-xs text-muted-foreground">
{file.department}
</p>


</div>


<Badge
className={statusClasses(file.status)}
>

{statusLabel[file.status]}

</Badge>


</div>


))

}


</div>


</Card>



</>


)

:





/* ================= ADMIN ================= */


(



<>


<div className="grid gap-4 md:grid-cols-4">


<Stat

icon={FileStack}

label="Total Files"

value={String(total)}

hint="All documents"

/>



<Stat

icon={Clock}

label="Pending"

value={String(pending)}

hint="Need action"

/>



<Stat

icon={AlertTriangle}

label="In Review"

value={String(review)}

hint="Processing"

/>



<Stat

icon={CheckCircle2}

label="Approved"

value={String(approved)}

hint="Completed"

/>



</div>




<Card className="mt-6 p-5">


<h2 className="font-semibold">
Recent Activity
</h2>


<div className="mt-4 space-y-3">


{

files.slice(0,10).map(file=>(


<div
key={file.id}
className="flex justify-between"
>


<div>

<Link
to={`/file/${file.id}`}
className="font-medium hover:underline"
>

{file.title}

</Link>


<p className="text-xs text-muted-foreground">
{file.department}
</p>


</div>


<div className="flex gap-2 items-center">


<Badge>
{file.status}
</Badge>



<Button
size="sm"
onClick={()=>updateStatus(file.id,"approved")}
>

Approve

</Button>



<Button
size="sm"
variant="destructive"
onClick={()=>{

const reason = prompt(
"Enter rejection reason"
);

updateStatus(
file.id,
"rejected",
reason || ""
);

}}
>
Reject
</Button>



<Button
size="sm"
variant="outline"
onClick={()=>updateStatus(file.id,"in_review")}
>

Review

</Button>


</div>


</div>



))

}



</div>


</Card>



</>



)


}



</AppShell>


)

}