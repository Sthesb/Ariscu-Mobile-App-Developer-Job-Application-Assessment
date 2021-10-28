# Ariscu-Mobile-App-Developer-Job-Application-Assessment

This project is a todo app written in react native using expo and laravel as the backend 

# Prerequisite to run this app
download and install all the following
- Laravel (latest)
- MySQL or PostgresSQL
- React Native using the Expo Cli 
- <a href ="https://ngrok.com/download">Ngrok</a> (for your localhost address)

# Steps to run the project
- First pull the project to your pc 
- Connect laravel to your server. MySQL or PostgresSQL
- To migrate all the table, go to the backend folder and in your terminal, run this command : "php artisan migrate" and to run the backend app, in your terminal run this command: "php artisan serve"
- 
- In the Ngrok app. run this command : ngrok http http://127.0.0.1:8000 
- copy the "https" address in the ngrok terminal to the following files

  Login.Js line 10. Change the url to https url. 
  Register.Js line 11. Change the url to https url. 
  Home.Js line 12, 24, 43. Change the url to https url. 
  
- In the frontend folder, open your terminal and run "expo install" command to install all packages
- once done, run expo start
