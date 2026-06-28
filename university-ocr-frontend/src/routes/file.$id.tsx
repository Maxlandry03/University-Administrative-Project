import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { getSession } from "@/lib/session";

export const Route = createFileRoute("/file/$id")({
component: FileDetails
});


function FileDetails(){

const {id}=Route.useParams();


const [file,setFile]=useState<any>(null);



useEffect(()=>{


const session=getSession();


fetch(
`http://localhost:8000/api/files/${id}`,
{

headers:{
Authorization:`Bearer ${session?.token}`,
Accept:"application/json"
}

}

)

.then(res=>res.json())
.then(data=>setFile(data));


},[id]);



if(!file)return <p>Loading...</p>;



return(

<div className="p-6">


<Card className="p-6">


<h1 className="text-xl font-bold">
{file.title}
</h1>


<p className="text-sm text-muted-foreground">
Department: {file.department}
</p>

{file.description && (
  <div className="mt-4 p-4 border rounded bg-muted/20">
    <h2 className="font-semibold">Description</h2>

    <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">
      {file.description}
    </p>

    
  </div>
)}

<p className="mt-2">
Status: {file.status}
</p>


{
file.status === "Rejected" && (

<div className="mt-4 p-4 border rounded bg-red-50">

<h2 className="font-semibold text-red-600">
Rejection Reason
</h2>


<p className="mt-2 text-sm">
{
file.rejection_reason 
|| 
"No reason provided"
}
</p>


</div>

)
}



<hr className="my-4"/>


<h2 className="font-semibold">
OCR Content
</h2>



<div className="mt-3 p-4 border rounded">

{file.content || "No OCR content found"}

</div>



</Card>


</div>


)

};