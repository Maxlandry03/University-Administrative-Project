FROM php:8.2-cli

# Install system dependencies + PHP extensions Laravel ned
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev zip libpq-dev libonig-dev \
    && docker-php-ext-install pdo pdo_mysql zip mbstring

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy only composer files first (better caching on rebuilds)
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --optimize-autoloader

# Now copy the rest of the app
COPY . .

RUN composer dump-autoload --optimize

# Render injects $PORT at runtime — Laravel must bind to it
EXPOSE 10000
CMD php artisan config:cache && php artisan route:cache && php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=$PORT