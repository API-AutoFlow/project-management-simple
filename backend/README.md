# Backend

## Download

Go to interactor website and download the on-premise software.

https://www.interactor.com/product/autoflow/downloads


## Run

Follow the instructions to run API AutoFlow

<details>
  <summary>► MAC: (press to expand)</summary>
  
  ```
  cd ~/api_interactor/bin
  ./api_interactor start 
  ```
  
  Open up the browser and go to below URL
  
  ```
  http://localhost:4000
  ```
  
  🚨 IMPORTANT: Run the servers by pressing the ▶️ button
  
  Reference:
  http://www.interactor.com/product/autoflow/installation/macos
</details>

<details>
  <summary>► Windows: (press to expand)</summary>
  
  🚨 IMPORTANT: Open the terminal (cmd) using **Run as Administrator**
  ```
  cd ~/autoflow_windows/bin
  ./api_interactor install 
  ./api_interactor start 
  ```
 
  Open up the browser and go to below URL
  
  ```
  http://localhost:4000
  ```
  
  🚨 IMPORTANT 🚨 Run the servers by pressing the ▶️ button
	
	
  Reference:
  http://www.interactor.com/product/autoflow/installation/windows
  
</details>



<details>
  <summary>► Linux: (press to expand)</summary>
  
  Step 1: Download the linux version
  www.interactor.com/product/autoflow/download
  
  Step 2: Open the terminal after downloading the software and Untar the file. For example: 
  
  ```
  tar -xzf autoflow_ubuntu20.tar
  ```

  Step 3: Run API AutoFlow command
  
  
  ```
  cd home/api_interactor/bin
  ./api_interactor start 
  ```
  
  Step 4: Open up the browser and go to below URL
  
  ```
  http://localhost:4000
  ```
  
  Step 4: Run the servers by pressing the ▶️ button
  
  Reference:
  http://www.interactor.com/product/autoflow/installation/linux
</details>


## Upload configuration

Install & Run API AutoFlow packages
 - From the left navigation, go to the __Settings__
 - Press the [Upload Configuration] button
 - Locate the autoflow.json file from files you downloaded from Github. .json file is located in the __backend__ folder
 - Make sure all the servers are turned on


## API Endpoints


### Service
 | No. | Name           | Type     | Endpoint  | Description|
 | --- | -------------- | -------- | --------- | ---------- |
 | 1 | `Create`       | POST     | /         | Creates the task |
 | 2 | `Read`         | GET      | /         | Reads the task |
 | 3 | `Update`       | PATCH    | /         | Updates the task|
 | 4 | `Delect`       | DELETE   | /         | Deletes the task  |

 

1. `Create` : `POST`   `/`    

Request: 

```
{aas}
```

Response: 

```
{aas}
```

2. `Read` : `GET`   `/`    

Request: 

```
{aas}
```

Response: 

```
{aas}
```

3. `Update` : `PATCH`   `/`    

Request: 

```
{aas}
```

Response: 

```
{aas}
```

4. `Delete` : `DELETE`   `/`    

Request: 

```
{aas}
```

Response: 

```
{aas}
```



### Authentication
  | No. | Name           | Type     | Endpoint  | Description|
  | --- | -------------- | -------- | --------- | ---------- |
  | 1 | `Create`       | POST     | /         | Creates the task |
  | 2 | `Read`         | GET      | /         | Reads the task |
  | 3 | `Update`       | PATCH    | /         | Updates the task|
  | 4 | `Delect`       | DELETE   | /         | Deletes the task  |
