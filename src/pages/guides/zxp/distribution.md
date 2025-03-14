---
keywords:
  - App Manager
  - App Builder app
  - Software integration
  - Developer Distribution
  - Extensibility
  - Adobe Exchange
  - Developer Console
  - Technology Partner Program
  - TPP
  - Developer Console
title: FAQ - Frequently Asked Questions
description: This is the FAQ page
---

<Hero slots="heading, text" background="rgb(141, 52, 78)"/>

# What's New: Introducing a new credential for partners to build and distribution software integrations. 

<!-- (Commented) App Manager has been merged into Developer Distribution. -->


Logged in [Technology Partner Program (TPP)](https://partners.adobe.com/technologyprogram/experiencecloud.html) members can submit Server-to-server integrations, catalog listings and App Builder apps for Adobe’s Experience Cloud products in [Developer Distribution](/distribute). Developer Distribution is a unified portal to self-submit & manage Experience Cloud listings to be published on [Adobe Exchange](https://exchange.adobe.com/apps/browse/ec). 

<br/>

## Server-to-server integrations 

<br/>

- [What is a server-to-server integration?](#what-is-a-server-to-server-integration)
- [Can customers acquire server-to-server integrations from Exchange marketplace today?](#can-customers-acquire-server-to-server-integrations-from-exchange-marketplace-today) 
- [What are the steps to create a server-to-server integration listing for public distribution?](#what-are-the-steps-to-create-a-server-to-server-integration-listing-for-public-distribution)
- [If I already have a server-to-server integration listed as a catalog listing, how do I change it?](#change-listing-type)
- [Where can I get more information or help?](#where-can-i-get-more-information-or-help)

<br/>

## Catalog listings 

<br/>

- [What is a catalog listing?](#catalog-listing-1)
- [Can I use Developer Distribution to create and manage catalog listings?](#catalog-listing-2)
- [What are the steps to create a catalog listing for public distribution?](#catalog-listing-3)
- [Where can I get more information or help?](#catalog-listing-4)

<br/>

## App Builder apps

<br/>

- [What is an App Builder app?](#appbuilder-1)
- [What are the steps to create an App Builder listing for public distribution?](#appbuilder-2)
- [If I previously created a private App Builder App via the App Builder Trial Sign up, can I distribute it publicly?](#appbuilder-3)
- [Where can I get more information or help?](#appbuilder-4)

<br/>

## Server-to-server integrations Answers

 
### What is a server-to-server integration? 

A server-to-server integration are API based integrations between two or more servers which essentially exchange data, protected by security mechanisms like Oauth authentication. The data exchange happens completely between the servers, so these information exchanges aren’t visible to individual users.  

Adobe Exchange has 275+ public server-to-server integrations that extend Experience Cloud products; but these are mostly catalog listings. This means customers can find them on Adobe Exchange but need to contact the publisher of that application directly to acquire them. 

### Can customers acquire server-to-server integrations from Exchange marketplace today? 

In March 2025, Adobe is introducing a new enterprise credential that will enable developers to publish server-to-server integrations that can be acquired from Adobe Exchange without having to contact the partner directly. To differentiate between the existing integrations that can’t be acquired from the Exchange marketplace, and the new ones that get created using the new enterprise credentials, they will be referred to ‘catalog listings’ and ‘server-to-server integrations respectively’ on Developer Distribution. The process for creating these listings will differ.  

- A catalog listing can be created directly from Developer Distribution, without the publisher needing to go to Developer Console mandatorily. However, note that these integrations still require Oauth server-to-server credentials generated on Developer Console to be able to function correctly.
- A server-to-server integration can only be created in an existing project that has an enterprise credential associated with it.

### What are the steps to create a server-to-server integration listing for public distribution? 

1. Login or join the [Technology Partner Program (TPP)](https://partners.adobe.com/technologyprogram/experiencecloud.html). You will have to join the TPP as a Silver Member or above for your published listing to be displayed publicly on the Exchange marketplace. At the free level, only an unlisted detail page URL is available to share with potential customers. Public listings for Experience Platform Launch are available at the free level. Upon TPP registration approval, a organization (org) will be assigned to your Adobe login credentials, and you’ll have access to create server-to-server integration listings in Developer Distribution.
2. After your registration has been approved, submit a request for an Adobe product Sandbox for any required API using the [TPP sandbox request ticket](https://partners.adobe.com/technologyprogram/experiencecloud/knowledgebase/db56212793bf8214fbe77b847aba1091.html). You will need a sandbox for building your integration in [Developer Console](https://developer.adobe.com/developer-console/), which you can then list as a server-to-server integration listing on Developer Distribution. Note that for server-to-server integration listings, an enterprise credential needs to be present in the same Developer Console project as the one where you create your server-to-server integration listing.
3. Create a new server-to-server integration listing for your integration in [Developer Distribution](https://developer.adobe.com/developer-distribution). You will need to associate the listing with an existing Developer Console project that has an enterprise credential associated with it already.

<a name="change-listing-type"></a>

### If I already have an integration listed as a catalog listing, how do I change it to a server-to-server integration listing?

All the server-to-server integrations created before March 2025 are listed as catalog listings on the Exchange marketplace. If you have such an integration, customers on the Exchange marketplace can’t acquire it or manage it. If you would like to list it as a server-to-server integration, you’ll need to create an enterprise credential in Developer Console and create a new listing on Developer Distribution, in the same project as the enterprise credential. You are recommended to retract your legacy catalog listing from Exchange, when the new server-to-server integration listing gets published, so that customers can benefit from the improved workflows and can acquire and manage the listing from Exchange.  

### Where can I get more information or help? 

Contact [TPP Support](https://partners.adobe.com/ec/cform/case) 

## Catalog listing Answers 

<a name="catalog-listing-1"></a>

### What is a catalog listing? 

Catalog listing is the name for the legacy Experience Cloud third-party listings that extend one or more Adobe Experience Cloud products, but without an acquisition workflow on the Exchange marketplace. The existing 390+ public catalog listings on [Adobe Exchange](https://exchange.adobe.com/apps/browse/ec) were submitted using App Manager. These are typically multi-tenant service-to-service integrations that require enterprise customers to contact the developer to be acquired and installed. 

<a name="catalog-listing-2"></a>

### Can I use Developer Distribution to create and manage catalog listings? 

Yes, the App Manager link in the Technology Partner Portal has been replaced with a link for [Developer Distribution](https://developer.adobe.com/developer-distribution). All previously created catalog listings can also be managed in Developer Distribution. 

<a name="catalog-listing-3"></a>

### What are the steps to create a catalog listing for public distribution? 

1. Login or join the [Technology Partner Program (TPP)](https://partners.adobe.com/technologyprogram/experiencecloud.html). You will have to join the TPP as a Silver Member or above for your published listing to be displayed publicly on the Exchange marketplace. At the free level, only an unlisted detail page URL is available to share with potential customers. Public listings for Experience Platform Launch are available at the free level. Upon TPP registration approval, a organization (org) will be assigned to your Adobe login credentials, and you’ll have access to create catalog listings in Developer Distribution.
2. After your registration has been approved, submit a request for an Adobe product Sandbox for any required API using the [TPP sandbox request ticket](https://partners.adobe.com/technologyprogram/experiencecloud/knowledgebase/db56212793bf8214fbe77b847aba1091.html). You will need a sandbox for building your software integration in Developer Console, which you can then list as a catalog listing on Developer Distribution. Note that for catalog listings, the credential doesn’t need to be in the same Developer Console project as the one where you create your catalog listing.
3. Create a new catalog listing for your software integration in [Developer Distribution](https://developer.adobe.com/developer-distribution). You will have the option to associate the listing with an existing Console project or go to Developer Console later and add an API to a project created for your new listing.

<a name="catalog-listing-4"></a>

### Where can I get more information or help? 

Contact [TPP Support](https://partners.adobe.com/ec/cform/case) 

## App Builder app Answers 

<a name="appbuilder-1"></a>

### What is an App Builder app? 

Adobe Developer App Builder provides a unified third-party extensibility framework for integrating and creating custom experiences to extend Adobe products. Enterprise customers can browse listings and then acquire and install App Builder apps from [Adobe Exchange](https://exchange.adobe.com/apps/browse/ec). 

<a name="appbuilder-2"></a>

### What are the steps to create an App Builder listing for public distribution? 

1. Login or join the [Technology Partner Program (TPP)](https://partners.adobe.com/technologyprogram/experiencecloud.html). You will have to join the TPP as a Silver Member or above for your published listing to be displayed publicly. As a Community (free) Member, only an unlisted detail page URL will be available to share with potential customers. Upon TPP registration approval, an organization (org) will be assigned to your Adobe login credentials (Personal Account).
2. After your registration has been approved, submit a request for an App Builder Sandbox using the [TPP sandbox request ticket](https://partners.adobe.com/technologyprogram/experiencecloud/knowledgebase/db56212793bf8214fbe77b847aba1091.html).
3. Once you receive confirmation of your App Builder sandbox, go to [Developer Console](https://developer.adobe.com/developer-console/), add App Builder to a project, and create your App Builder app.​
4. Create and submit a new or updated listing for an App Builder app using Developer Distribution. You will be given the option to pick an existing project that you created in #3 (most common) or create the project in Developer Distribution and go back to the Console to add an API later.​

<a name="appbuilder-3"></a>

### If I previously created a private App Builder App via the App Builder Trial Sign up, can I distribute it publicly? 

Yes, after you login or join the TPP program, you will be able to create an App Builder listing that can be associated with an existing Developer Console Project. 

<a name="appbuilder-4"></a>

### Where can I get more information or help? 

Learn how to build an App Builder app [App Builder documentation](https://developer.adobe.com/app-builder/docs/getting_started/). 

Contact [TPP Support](https://partners.adobe.com/ec/cform/case).
