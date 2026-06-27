FROM nginx:alpine

COPY contact-form-app/src /usr/share/nginx/html

EXPOSE 80