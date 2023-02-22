---
layout: sub-navigation
order: 3
includeInBreadcrumbs: true
title: Use SFTP to send data
---

SFTP (Secure File Transfer Protocol) allows vehicle manufacturers to send CSV files containing safety recall data to DVSA over a secure connection. Your organisation can use software known as an [SFTP client](https://docs.aws.amazon.com/transfer/latest/userguide/transfer-file.html) to send the files. 

You should only use SFTP temporarily if you can adopt the API. Only the API allows you to update the data instantly.

---

## How SFTP works

### Vehicle manufacturer:

1.  Creates a daily CSV file containing all outstanding safety recalls, following the data specification
2. Connects securely to the DVSA SFTP server using an SFTP client and SSH keys
3. Transfers the file to the SFTP server

### DVSA:

4.  Saves the CSV file, scans for viruses and validates the data
5.  Adds new safety recalls to the database
6.  Marks vehicles no longer found in the CSV file as fixed 
7.  Displays the outstanding recalls on MOT digital services

---

## Getting started

You can [apply here](https://forms.office.com/e/QLHWZ2jeNc) to use the SFTP solution.

### Authentication

Before you can apply to use SFTP, you need to generate SSH keys.

SSH keys authenticate users when connecting to an SFTP server, like a username and password. Your organisation will generate a public and private key pair. DVSA will store your public key on the SFTP server and grant you access if you can prove you have the corresponding private key.

After you apply, DVSA will provide your username and the SFTP endpoint.

### Begin sending data

Once you have received your username, you will first be asked to send a csv file with all historic vehicles with an open safety recall. 

---

## Data specification 

Send your safety recall data to DVSA every day in a single a CSV file. The file must have .csv extension. The data should be in the exact format shown below:

| Data element | Description | Why is this required? | Format |
|---------------|---------------|---------------|---------------|
| VIN      | Vehicle Identification Number      | To uniquely identify the vehicle and flag its safety recall on MOT Services       | JN3MS37A9PW212345       |
| Manufacturer Recall Campaign Reference      | Manufacturer’s internal reference number for the recall campaign       | To link the VIN to the recall campaign       | Varies across manufacturers       |
| DVSA Campaign Reference      | Reference number supplied by DVSA for the safety recall campaign       | To track the recall rectification rate (removes need for quarterly updates)       | R/2022/123       |
| Recall Campaign Start Date       | Launch date of the safety recall       | To track how long a safety recall has remained outstanding      | YYYY-MM-DD      |

Only send data for vehicles with safety recalls that are currently outstanding. Vehicles with safety recalls that are now fixed should be removed from the file. 


  
### Example CSV File

The columns in the CSV file should be in the exact order shown below:


| VIN               | ManufacturerRecallCampaignReference  | DVSACampaignReference | RecallCampaignStartDate |
|-------------------|--------------------------------------|-----------------------|-------------------------|
| LH7PRODCJEE012345 | ABCCARS123                           | R/2026/123            | 2026-12-01              |
| 17748U47X15831234 | ABCVANS124                           | R/2026/124            | 2026-12-02              |
| ABCCCX5RZUDE1234  | ABCTRUCKS125                         | R/2026/125            | 2026-12-03              |
| CSVR5SJ62XBY12345 | ABCBUSES126                          | R/2026/126            | 2026-12-04              |




