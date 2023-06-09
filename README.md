# 311-Data v2

Demo: https://311-data-v2.vercel.app/

## "Democratizing public data to improve community initiatives"
Each day, Los Angelenos report thousands of 311 requests all across LA to resolve issues such as illegal dumping and graffiti in their neighborhoods. These requests are then received by relevant agencies, such as the Police, Building and Safety, or Department of Transportation. The agency responds to the request, addresses it, and then closes it once it is fixed. Thanks to Mayor Eric Garcetti's [Open Data Initiative](https://data.lacity.org/), the expansive amount of data associated with these 311 requests is available online.

We are a group of volunteers with diverse backgrounds who share a common vision: To make 311 request data more accessible and useful for our diverse communities and their representatives through visualization and data science. 

By leveraging technology, we can empower local residents and the representatives of our [Neighborhood Councils](https://empowerla.org/councils/) to 
* Access
* Analyze
* Visualize

service requests submitted through Los Angeles's 311 system at https://myla311.lacity.org/. 

Our application is open source, built and maintaned by volunteers throughout our community and provides two primary modes of operation:
* An interactive map showing where different types of 311 requests are being submitted
* Dashboards that show what types of requests are being made, how quickly they're being resolved, how different councils compare, and more

![image](https://user-images.githubusercontent.com/1448719/233575938-ce84a530-39ff-484e-a848-56121a40fe51.png)

Our mission is to create a user-friendly platform for anyone interested in exploring 311 service requests so that they can immediately gain actionable insights. We are looking for sponsors who can support our efforts and help us scale our impact. If you are interested in learning more about our project, would like to volunteer or become a sponsor, please [contact us](https://dev.311-data.org/contact). 

## Project Technology

### Frontend
* Javascript (React)
* Redux
* Material-UI 4.x
* [Socrata API](https://dev.socrata.com/foundry/data.lacity.org/4a4x-mna2)
* Vercel Deployment

### [Server/API](https://github.com/edwinjue/311-data-v2-server)
* Node.js
* Express.js
* MongoDb (Atlas)
* Vercel Serverless API
* Vercel Deployment

[See here](https://github.com/edwinjue/311-data-v2-server#311-data-v2-server) for more information about 311 Data server technology.

### Data Analysis

* Python
* Pandas/Numpy/Matplotlib
* Google Collab/Jupyter Notebook
* [Socrata API](https://dev.socrata.com/foundry/data.lacity.org/4a4x-mna2)

[See here](docs/data_loading.md) for more information about 311 Data project data analysis.

### UI/UX

* Figma
* Google Drive
* Adobe CC
* Miro

## Resources
Public data used in this project:
* [MyLA311 Service Request Data 2023](https://data.lacity.org/City-Infrastructure-Service-Requests/MyLA311-Service-Request-Data-2023/4a4x-mna2)

The source code for this project is based on the original 311-Data [v2-aws](https://github.com/hackforla/311-data/releases/tag/v2-aws) release
