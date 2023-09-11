(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{430:function(e,t,a){"use strict";a.r(t);var s=a(56),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-spring-boot-with-nubesgen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-spring-boot-with-nubesgen"}},[e._v("#")]),e._v(" Using Spring Boot with NubesGen")]),e._v(" "),a("p",[e._v("This documentation is for running Spring Boot applications with NubesGen. There are two other options that might interest you:")]),e._v(" "),a("ul",[a("li",[e._v("You can also use "),a("RouterLink",{attrs:{to:"/runtimes/java/"}},[e._v("Java with NubesGen")]),e._v(", which is similar to Spring Boot, but does not use the specific Spring Boot application properties.")],1),e._v(" "),a("li",[e._v("As Spring Boot applications can be packaged with Docker, you can also run them as "),a("RouterLink",{attrs:{to:"/runtimes/docker/"}},[e._v("Docker applications with NubesGen")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("NubesGen supports creating Azure App Service instances and Azure Functions instances, depending on the type of Spring Boot application that you wish to deploy.")]),e._v(" "),a("h2",{attrs:{id:"tutorial-1-running-a-full-stack-spring-boot-application-generated-with-jhipster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-1-running-a-full-stack-spring-boot-application-generated-with-jhipster"}},[e._v("#")]),e._v(" Tutorial 1: running a full stack Spring Boot application generated with JHipster")]),e._v(" "),a("p",[e._v("We're going to deploy "),a("a",{attrs:{href:"https://github.com/jhipster/jhipster-sample-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/jhipster/jhipster-sample-app"),a("OutboundLink")],1),e._v(", which is the default "),a("a",{attrs:{href:"https://www.jhipster.tech/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JHipster"),a("OutboundLink")],1),e._v(" application.")]),e._v(" "),a("p",[e._v("It uses a PostgreSQL database, so creating the database and connecting to it will also be managed by NubesGen.")]),e._v(" "),a("p",[e._v("We'll use NubesGen's "),a("a",{attrs:{href:"/gitops/gitops-overview"}},[e._v("GitOps support")]),e._v(" to automatically build and deploy the application.")]),e._v(" "),a("p",[a("strong",[e._v("Prerequisites:")])]),e._v(" "),a("p",[a("em",[e._v("Tip: You can go to "),a("a",{attrs:{href:"https://aka.ms/nubesgen-azure-shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aka.ms/nubesgen-azure-shell"),a("OutboundLink")],1),e._v(" to have those prerequisites installed, and run the script from a Web browser.")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Bourne-Again_shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bash"),a("OutboundLink")],1),e._v(", which is installed by default on most Linux distributions and on Mac OS X. If you're using Windows, one solution is to use "),a("a",{attrs:{href:"https://aka.ms/nubesgen-install-wsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("WSL"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/nubesgen-install-az-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),a("OutboundLink")],1),e._v(". To login, use "),a("code",[e._v("az login")]),e._v(".")]),e._v(" "),a("li",[e._v("(optional) "),a("a",{attrs:{href:"https://cli.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub CLI"),a("OutboundLink")],1),e._v(". To login, use "),a("code",[e._v("gh auth login")]),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("Steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Fork the project on your GitHub account.")]),e._v(" "),a("li",[e._v("Clone the fork on your computer. Change "),a("code",[e._v("<your-github-account>")]),e._v(" to the name of your GitHub account:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-github-account"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/jhipster-sample-app.git\n")])])])]),e._v(" "),a("li",[e._v("In the cloned project ("),a("code",[e._v("cd java-sample-app")]),e._v("), set up GitOps with NubesGen by running the NubesGen CLI ("),a("RouterLink",{attrs:{to:"/gitops/gitops-quick-start/"}},[e._v("more information here")]),e._v("):"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v(" ./nubesgen-cli-linux gitops\n")])])])],1),e._v(" "),a("li",[e._v("Use the command-line with NubesGen ("),a("RouterLink",{attrs:{to:"/reference/rest-api/"}},[e._v("more information here")]),e._v(") to generate a NubesGen configuration:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://nubesgen.com/demo.tgz?runtime=spring&application=app_service.standard&database=postgresql&gitops=true"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xzvf -\n")])])])],1),e._v(" "),a("li",[e._v("Create a new branch called "),a("code",[e._v("env-dev")]),e._v(", and push your code:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b env-dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Configure GitOps with NubesGen'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --set-upstream origin env-dev\n")])])])]),e._v(" "),a("li",[e._v("Go to your GitHub project, and check that the GitHub Action is running.")]),e._v(" "),a("li",[e._v("You can go to the "),a("a",{attrs:{href:"https://aka.ms/nubesgen-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Portal"),a("OutboundLink")],1),e._v(" to check the created resources.")]),e._v(" "),a("li",[e._v("The application should be deployed on your App Service instance. Its URL should be in the form "),a("code",[e._v("https://app-demo-XXXX-XXXX-XXXX-XXXX-dev-001.azurewebsites.net/")]),e._v(', and you can also find it in the GitHub Action workflow (Job: "display-information", step "Display Azure infrastructure information"), or in the Azure portal.')]),e._v(" "),a("li",[e._v("Once you have finished, you should clean up your resources:\n"),a("ol",[a("li",[e._v("Delete the resource group that was created by NubesGen to host your resources, which is named "),a("code",[e._v("rg-XXXX-XXXX-XXXX-XXXX-001")]),e._v(".")]),e._v(" "),a("li",[e._v("Delete the storage account used to store your Terraform state, in the "),a("code",[e._v("rg-terraform-001")]),e._v(" resource group.")])])])]),e._v(" "),a("h2",{attrs:{id:"tutorial-2-running-a-spring-intializr-project-with-nubesgen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-2-running-a-spring-intializr-project-with-nubesgen"}},[e._v("#")]),e._v(" Tutorial 2: running a Spring Intializr project with NubesGen")]),e._v(" "),a("p",[e._v("This tutorial is similar to the "),a("RouterLink",{attrs:{to:"/runtimes/java/"}},[e._v("Java on NubesGen")]),e._v(" tutorial, as this simple Spring Boot application is also a Java application.")],1),e._v(" "),a("p",[a("strong",[e._v("Prerequisites:")])]),e._v(" "),a("p",[a("em",[e._v("Tip: You can go to "),a("a",{attrs:{href:"https://aka.ms/nubesgen-azure-shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aka.ms/nubesgen-azure-shell"),a("OutboundLink")],1),e._v(" to have those prerequisites installed, and run the script from a Web browser.")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Bourne-Again_shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bash"),a("OutboundLink")],1),e._v(", which is installed by default on most Linux distributions and on Mac OS X. If you're using Windows, one solution is to use "),a("a",{attrs:{href:"https://aka.ms/nubesgen-install-wsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("WSL"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/nubesgen-install-az-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),a("OutboundLink")],1),e._v(". To login, use "),a("code",[e._v("az login")]),e._v(".")]),e._v(" "),a("li",[e._v("(optional) "),a("a",{attrs:{href:"https://cli.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub CLI"),a("OutboundLink")],1),e._v(". To login, use "),a("code",[e._v("gh auth login")]),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("Steps:")])]),e._v(" "),a("ol",[a("li",[e._v("Create a sample Java Web application using "),a("a",{attrs:{href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://start.spring.io/"),a("OutboundLink")],1),e._v("."),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://start.spring.io/starter.tgz?type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("maven-project"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("language")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("java"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("bootVersion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.1")]),e._v(".3"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("baseDir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("java-sample-app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("groupId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("com.example"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("java-sample-app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("java-sample-app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Demo%20project%20for%20Spring%20Boot"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("packageName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("com.example.java-sample-app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("packaging")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("javaVersion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("web "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xzvf -\n")])])])]),e._v(" "),a("li",[e._v("Create a project on GitHub called "),a("code",[e._v("java-sample-app")]),e._v(", and push the generated project to that repository. Change "),a("code",[e._v("<your-github-account>")]),e._v(" by the name of your GitHub account:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" java-sample-app\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"first commit"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" origin https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-github-account"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/java-sample-app.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -M main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push -u origin main\n")])])])]),e._v(" "),a("li",[e._v("In the cloned project ("),a("code",[e._v("cd java-sample-app")]),e._v("), set up GitOps with NubesGen by running the NubesGen CLI ("),a("RouterLink",{attrs:{to:"/gitops/gitops-quick-start/"}},[e._v("more information here")]),e._v("):"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v(" ./nubesgen-cli-linux gitops\n")])])])],1),e._v(" "),a("li",[e._v("Use the command-line with NubesGen ("),a("RouterLink",{attrs:{to:"/reference/rest-api/"}},[e._v("more information here")]),e._v(") to generate a NubesGen configuration:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://nubesgen.com/demo.tgz?runtime=spring&application=app_service.standard&gitops=true"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xzvf -\n")])])])],1),e._v(" "),a("li",[e._v("Create a new branch called "),a("code",[e._v("env-dev")]),e._v(", and push your code:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b env-dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Configure GitOps with NubesGen'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --set-upstream origin env-dev\n")])])])]),e._v(" "),a("li",[e._v("Go to your GitHub project, and check that the GitHub Action is running.")]),e._v(" "),a("li",[e._v("You can go to the "),a("a",{attrs:{href:"https://aka.ms/nubesgen-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Portal"),a("OutboundLink")],1),e._v(" to check the created resources.")]),e._v(" "),a("li",[e._v("The application should be deployed on your App Service instance. Its URL should be in the form "),a("code",[e._v("https://app-demo-XXXX-XXXX-XXXX-XXXX-dev-001.azurewebsites.net/")]),e._v(', and you can also find it in the GitHub Action workflow (Job: "display-information", step "Display Azure infrastructure information"), or in the Azure portal.\nAs it is an empty application, you should get 404 page called '),a("code",[e._v("Whitelabel Error Page")]),e._v(".")]),e._v(" "),a("li",[e._v("Once you have finished, you should clean up your resources:\n"),a("ol",[a("li",[e._v("Delete the resource group that was created by NubesGen to host your resources, which is named "),a("code",[e._v("rg-demo-XXXX-XXXX-XXXX-XXXX-001")]),e._v(".")]),e._v(" "),a("li",[e._v("Delete the storage account used to store your Terraform state, in the "),a("code",[e._v("rg-terraform-001")]),e._v(" resource group.")])])])]),e._v(" "),a("h2",{attrs:{id:"which-azure-resources-will-be-created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#which-azure-resources-will-be-created"}},[e._v("#")]),e._v(" Which Azure resources will be created")]),e._v(" "),a("p",[e._v("If you deploy your Spring Boot application to an Azure App Service instance, NubesGen will generate:")]),e._v(" "),a("ul",[a("li",[e._v("An "),a("a",{attrs:{href:"https://aka.ms/nubesgen-app-service-plans",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service plan"),a("OutboundLink")],1),e._v(" to define the type of App Service instance you will use.")]),e._v(" "),a("li",[e._v("An "),a("a",{attrs:{href:"https://aka.ms/nubesgen-app-service",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service instance"),a("OutboundLink")],1),e._v(", configured to run Java code natively.")])]),e._v(" "),a("p",[e._v("If you deploy your Spring Boot application to an Azure Function, NubesGen will generate:")]),e._v(" "),a("ul",[a("li",[e._v("An "),a("a",{attrs:{href:"https://aka.ms/nubesgen-app-service-plans",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service plan"),a("OutboundLink")],1),e._v(" to define the type of Azure Functions instance you will use.")]),e._v(" "),a("li",[e._v("An "),a("a",{attrs:{href:"https://aka.ms/nubesgen-functions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions instance"),a("OutboundLink")],1),e._v(", configured to run Java code natively.")]),e._v(" "),a("li",[e._v("An "),a("a",{attrs:{href:"https://aka.ms/nubesgen-storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage Account"),a("OutboundLink")],1),e._v(", to store your Java application.")])]),e._v(" "),a("h2",{attrs:{id:"maven-vs-gradle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven-vs-gradle"}},[e._v("#")]),e._v(" Maven vs Gradle")]),e._v(" "),a("p",[e._v("NubesGen supports both Maven and Gradle, so you can use the build system you prefer.")]),e._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[e._v("#")]),e._v(" Configuration options")]),e._v(" "),a("p",[e._v("In the generated "),a("code",[e._v("terraform/modules/app-service/main.tf")]),e._v(" file, NubesGen will configure some environment variables\nfor your application. Those are standard Spring Boot\nproperties, so your Spring Boot application should be automatically configured\n(for example: your database connection should be working out-of-the-box).")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("SPRING_DATASOURCE_URL")]),e._v(": the JDBC URL to your database")]),e._v(" "),a("li",[a("code",[e._v("SPRING_DATASOURCE_USERNAME")]),e._v(": the database user name")]),e._v(" "),a("li",[a("code",[e._v("SPRING_DATASOURCE_PASSWORD")]),e._v(": the database password")]),e._v(" "),a("li",[a("code",[e._v("SPRING_REDIS_HOST")]),e._v(": the Redis host name")]),e._v(" "),a("li",[a("code",[e._v("SPRING_REDIS_PASSWORD")]),e._v(": the Redis password")]),e._v(" "),a("li",[a("code",[e._v("SPRING_REDIS_PORT")]),e._v(": the Redis port (by default "),a("code",[e._v("6380")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("SPRING_REDIS_SSL")]),e._v(": if Redis uses SSL (by default "),a("code",[e._v("true")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("AZURE_STORAGE_ACCOUNT_NAME")]),e._v(": the storage account name")]),e._v(" "),a("li",[a("code",[e._v("AZURE_STORAGE_ACCOUNT_KEY")]),e._v(": the storage account key")]),e._v(" "),a("li",[a("code",[e._v("AZURE_STORAGE_BLOB_ENDPOINT")]),e._v(": the blob storage endpoint")]),e._v(" "),a("li",[a("code",[e._v("SPRING_DATA_MONGODB_DATABASE")]),e._v(": the MongoDB database name")]),e._v(" "),a("li",[a("code",[e._v("SPRING_DATA_MONGODB_URI")]),e._v(": the MongoDB database URL")])])])}),[],!1,null,null,null);t.default=r.exports}}]);