---
layout: sub-navigation
order: 1
includeInBreadcrumbs: true
title: Use the API to send data
---

The Vehicle Recalls API allows vehicle manufacturers to send recall data to DVSA instantly. The API can integrate with your organisation’s system for managing recalls. This means DVSA’s data will be updated as soon as you:

- open a new recall for a single vehicle on your system
- mark a vehicle’s recall as fixed by the dealership

---

## How the API works

You can use the API from 4 different endpoints:

### 1. Create a new recall for a single vehicle

Open a new recall on a vehicle using the VIN. In the request body, include:

-	your recall campaign reference
-	DVSA’s recall campaign reference
-	the recall campaign start date

### 2. Update a recall as fixed for a single vehicle

Confirm a recall on a vehicle is fixed using the VIN and either:

- your recall campaign reference
- DVSA’s recall campaign reference

In the request body, include:

- rectification date
- repair status (FIXED)

### 3. Get all recall information for a single vehicle

Find out all recall information DVSA holds for a vehicle using the VIN. A successful response will return:

-	your recall campaign reference
-	DVSA’s recall campaign reference
-	the recall campaign start date
-	the repair status

### 4. Delete a recall added in error for a single vehicle

Delete a recall on a vehicle that you created in error using the VIN and either:
- your recall campaign reference
- DVSA’s recall campaign reference

You cannot use this endpoint delete a vehicle that has been marked as fixed.

---

## Getting started

You can [apply here](https://forms.office.com/e/QLHWZ2jeNc) to use the API solution.

### Authentication

The API uses OAuth2.0 with the Client Credentials flow for authentication and authorisation.

After you apply to use the API, DVSA will provide you with a client ID, client secret and scope. Your application will use these credentials to obtain an access token, which is needed in the header of each request to the API.

### Begin sending data

Once you have received your credentials, you will first be asked to create all historic vehicles which have an open recall.

#### Creating high volumes of vehicles
The API create endpoint is limited to 25 requests per second.

If you have a large number of historic vehicles with an open recall, you can use SFTP for this first data transfer. Contact DVSA if you would like to take this approach.

---

## API Reference

Visit the [OpenAPI Specification page](/recalls/vehicle-recalls-service/api-spec/). [You can also view the OpenAPI specification in YML format](/recalls/vehicle-recalls-service/api-spec/external_api_recalls.yml).

---

## Testing the API

We have developed an application to help you test the API. See the [GitHub repository](https://github.com/dvsa/recalls-mock-api).

You can run the application locally to simulate responses from the live service.
Instructions on how to use the application are found in the README document.

---

## Rate limits

We strongly recommend caching the access token after it's acquired to avoid errors caused by too many requests.

Per second, you can make up to:

- 25 POST requests to create a new recall for a vehicle
- 25 PUT requests to update a vehicle’s recall as fixed
- 25 DELETE requests to delete a recall added in error
- 25 GET requests to read all recall information for a vehicle

If you exceed the rate limit, this will return an error caused by too many requests.
