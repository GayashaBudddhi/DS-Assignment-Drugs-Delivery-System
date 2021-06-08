===================================================================================================================================================
======================  2021_REG_WD_09      ===============================================================================================
===================================================================================================================================================

Steps to deploy the project.

*****************************************************************
*****************************************************************
files:                                                   ********
	AssignmentMcartServices => WSO2 files	         ********
	DS ASSIgnment => reactJS (frontend files)	 ********
	login-api => database files			 ********
*****************************************************************
*****************************************************************
*****************************************************************
	

*There are four main files :
    Frontend(Source code of the web client) developed by ReactJS( VS code)
    Backend(Source code of the RESTful web services) developed by ReactJS(VS code IDE)
    Database file handled by Laravel
    WSO2 Enterprise Integration project 


Opening the web client:-(DS ASSIgnment)
======================================:
//run this command
-npm start
user has to login via registration
admin can login by giving email : admin@gmail.com, pwd: 1234 
//if admin data dosent exist in the table due to wrong password encryption
then go to sql and update one of the normal users aType to admin to view the admin portal


Database configuration:-(login-api)
======================================:

//.env change the confi of database to the PC eniviornment:: line 14,15,13

run this command;
//to create a schema and tables
php artisan migrate

//to add data to the tables
php artisan db:seed

//to run the server
php artisan serve



WSO2 Enterprise Integration:-
======================================:
*WSO2 Enterprise Integrator 6.6.0 has used as the integration platform to connect the application and the different services.
*The development environment is Eclipse Intergration Studio and it supports the Edit, Build, Debug, Deploy Cycle for Applications on WSO2 Products.
*In our scenario there are 3 main services as;
      UserController Service
      CartView Service
      PaymentController Service.
*Below are the steps to deploy the intergration project in WSO2 Enterprise Integrator.

Step 1:- Creating the message mediation artifacts.
-Create the deployable artifacts project. The following projects should be created seperately.
        1.Registry Resources Project
        2.Connector Exporter Project
        3.Composite Application Project
-Connect to the back-end service. Create 3 Endpoints seperately.
        1.CartViewEP
        2.PaymentControllerEP
        3.UserControllerEP
-Mediate requests to the back-end service. Create a REST API named McartAPIAPI and create a resource within this API for the GET HTTP method that is used 
to send requests to the Mcart back-end service and retrieve and enter available information.

Step 2:- Package the artifacts.
-Open the pom.xml file of the C-App project in the Composite Application Project POM Editor and select the artifact that needs to be included.

Step 3:- Start the ESB profile and deploy the artifacts.
-Add the WSO2 Enterprise Integrator Server at localhost.
-Browse the runtime environment to CARBON_HOME from the WSO2 EI distribution directory.
-Select AssignmentMcartServicesCompositeApplication from the list and add to move it into the configured list.
-Then run the server.

Step 4:- Start the back-end service.
-Get JAR file of the back-end service.
-Open command prompt and navigate to the location of the back-end service.
-Execute the following command to start the service:
        java -jar Mcart-Service-JDK11-2.0.0.jar

Step 5:- Send the requests to the WSO2 EI.
-In the Console tab in WSO2 Integration Studio and you will see the following message: INFO - LogMediator message = Routing to Mcart
-This message printed by the Log mediator when the message from the client is routed to the relevant endpoint in the Switch mediator.
     
===================================================================================================================================================
===================================================================================================================================================
===================================================================================================================================================
