---
keywords:
  - App Manager
  - App Builder app
  - server-to-server
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

# What's New: Introducing a new credential for partners to build and distribute server-to-server integrations.

<!-- (Commented) App Manager has been merged into Developer Distribution. -->

[Technology Partner Program (TPP)](https://partners.adobe.com/technologyprogram/experiencecloud.html) members can submit Server-to-server integrations, Catalog listings and App Builder apps for Adobe’s Experience Cloud products in [Developer Distribution](/distribute). Developer Distribution is a unified portal to self-submit & manage Experience Cloud listings to be published on [Adobe Exchange](https://exchange.adobe.com/apps/browse/ec).

<br/>

## Server-to-server integrations

<br/>

- [What is a server-to-server integration?](#what-is-a-server-to-server-integration)
- [Can customers acquire server-to-server integrations from Exchange marketplace today?](#can-customers-acquire-server-to-server-integrations-from-exchange-marketplace-today)
- [What are the steps to create a server-to-server integration listing for public distribution?](#what-are-the-steps-to-create-a-server-to-server-integration-listing-for-public-distribution)
- [If I already have a server-to-server integration listed as a catalog listing, how do I change it?](#if-i-already-have-an-integration-listed-as-a-catalog-listing-how-do-i-change-it-to-a-server-to-server-integration-listing)
- [I do not currently have a server-to-server integration listed as a catalog listing on Exchange marketplace, but I am building one. How should I list it?](#i-do-not-currently-have-a-server-to-server-integration-listed-as-a-catalog-listing-on-exchange-marketplace-but-i-am-building-one-how-should-i-list-it)
- [Where can I get more information or help?](#where-can-i-get-more-information-or-help)

<br/>

## Catalog listings

<br/>

- [What is a catalog listing?](#what-is-a-catalog-listing)
- [Can I use Developer Distribution to create and manage catalog listings?](#can-i-use-developer-distribution-to-create-and-manage-catalog-listings)
- [What are the steps to create a catalog listing for public distribution?](#what-are-the-steps-to-create-a-catalog-listing-for-public-distribution)
- [Where can I get more information or help?](#where-can-i-get-more-information-or-help)

<br/>

## App Builder apps

<br/>

- [What is an App Builder app?](#what-is-an-app-builder-app)
- [What are the steps to create an App Builder listing for public distribution?](#what-are-the-steps-to-create-an-app-builder-listing-for-public-distribution)
- [If I previously created a private App Builder App via the App Builder Trial Sign up, can I distribute it publicly?](#if-i-previously-created-a-private-app-builder-app-via-the-app-builder-trial-sign-up-can-i-distribute-it-publicly)
- [Where can I get more information or help?](#where-can-i-get-more-information-or-help)

<br/>

## Server-to-server integrations Answers

### What is a server-to-server integration?

Server-to-server integrations are API based integrations between two or more servers which essentially exchange data, protected by security mechanisms like Oauth authentication. The data exchange happens completely between the servers, so these information exchanges aren’t visible to individual users.  

Adobe Exchange has 275+ public server-to-server integrations that extend Experience Cloud products; but these are mostly catalog listings. This means customers can browse them on Adobe Exchange but need to contact the publisher of that application directly to acquire them.

### Can customers acquire server-to-server integrations from Exchange marketplace today?

In March 2025, Adobe introduced a new enterprise credential that will enable developers to publish server-to-server integrations which users can acquire from Adobe Exchange without having to contact the developer directly. Existing metadata-only server-to-server integrations that cannot be acquired from the Exchange marketplace are referred to as 'catalog listings' whereas 'Server-to-server' integration listings refer to integrations created with the new enterprise credentials. The process for creating these listings will differ.  

- A catalog listing can be created directly from Developer Distribution, without the publisher needing to go to Developer Console ahead of time. Note, however, that catalog listing integrations still require Oauth server-to-server credentials generated on Developer Console which the developer will need to share with their customer.
- A server-to-server integration must be created in Developer Distribution with an existing project that already has an enterprise credential associated with it, assigned in Developer Console.

### What are the steps to create a server-to-server integration listing for public distribution?

1. Login or join the [Technology Partner Program (TPP)](https://partners.adobe.com/technologyprogram/experiencecloud.html). TPP Silver Membership or above includes the benefit of public listings on Adobe Exchange. Free (Community) membership includes unlisted public detail page URLs for approved listings, which the developer can share with customers. Public listings for Experience Platform Launch catalog listings are available at the free level. Upon TPP registration approval, a organization (org/account) will be assigned to your TPP login credentials, which you should choose when logging into Developer Distribution (DD) or Developer Console (DC)
2. After your registration has been approved, submit a request for an Adobe product Sandbox for any required APIs using the [TPP sandbox request ticket](https://partners.adobe.com/technologyprogram/experiencecloud/knowledgebase/db56212793bf8214fbe77b847aba1091.html). You will need a sandbox for building your integration in [Developer Console](https://developer.adobe.com/developer-console/), which be assigned to your TPP organization/account. Note that for server-toserver integrations an enterprise credential needs to be associated with the same Developer Console project that is assigned to the listing. 
3. Create a new server-to-server integration listing for your integration in [Developer Distribution](https://developer.adobe.com/developer-distribution). Step 2 in creating a listing is choosing a project that already has your enterprise credential created previously in Developer Console.

### If I already have an integration listed as a catalog listing, how do I change it to a server-to-server integration listing?

All the server-to-server integrations created before March 2025 are listed as catalog listings on the Exchange marketplace. If you have such an integration, customers on the Exchange marketplace can’t acquire it or manage it. If you would like to list it as a server-to-server integration, you’ll need to create an enterprise credential in Developer Console and create a new listing on Developer Distribution, in the same project as the enterprise credential. You are recommended to retract your legacy catalog listing from Exchange, when the new server-to-server integration listing gets published, so that customers can benefit from the improved workflows and can acquire and manage the listing from Exchange.  

### I do not currently have a server-to-server integration listed as a catalog listing on Exchange marketplace, but I am building one. How should I list it?

All the steps to list a server-to-server integration remain the same as detailed in the previous question, irrespective of whether you already have the integration listed as a catalog listing or not. Note that the key difference between listing an integration as a catalog listing or a server-to-server integration listing is that the latter integration must be built using the new enterprise credential on Developer Console.

### Where can I get more information or help?

Contact [TPP Support](https://partners.adobe.com/ec/cform/case)

## Catalog listing Answers

### What is a catalog listing?

Catalog listing is the name for the legacy Experience Cloud third-party listings that extend one or more Adobe Experience Cloud products, but without an acquisition workflow on the Exchange marketplace. The existing 390+ public catalog listings on [Adobe Exchange](https://exchange.adobe.com/apps/browse/ec) were submitted using App Manager. These are typically multi-tenant service-to-service integrations that require enterprise customers to contact the developer to be acquired and installed.

### Can I use Developer Distribution to create and manage catalog listings?

Yes, the App Manager link in the Technology Partner Portal has been replaced with a link for [Developer Distribution](https://developer.adobe.com/developer-distribution). All previously created catalog listings can also be managed in Developer Distribution.

### What are the steps to create a catalog listing for public distribution?

1. Login or join the [Technology Partner Program (TPP)](https://partners.adobe.com/technologyprogram/experiencecloud.html). You will have to join the TPP as a Silver Member or above for your published listing to be displayed publicly on the Exchange marketplace. At the free level, only an unlisted detail page URL is available to share with potential customers. Public listings for Experience Platform Launch are available at the free level. Upon TPP registration approval, a organization (org) will be assigned to your Adobe login credentials, and you’ll have access to create catalog listings in Developer Distribution.
2. After your registration has been approved, submit a request for an Adobe product Sandbox for any required API using the [TPP sandbox request ticket](https://partners.adobe.com/technologyprogram/experiencecloud/knowledgebase/db56212793bf8214fbe77b847aba1091.html). You will need a sandbox for building your software integration in Developer Console, which you can then list as a catalog listing on Developer Distribution. Note that for catalog listings, the credential doesn’t need to be in the same Developer Console project as the one where you create your catalog listing.
3. Create a new catalog listing for your software integration in [Developer Distribution](https://developer.adobe.com/developer-distribution). You will have the option to associate the listing with an existing Console project or go to Developer Console later and add an API to a project created for your new listing.

### Where can I get more information or help?

Contact [TPP Support](https://partners.adobe.com/ec/cform/case)

## App Builder app Answers

### What is an App Builder app?

Adobe Developer App Builder provides a unified third-party extensibility framework for integrating and creating custom experiences to extend Adobe products. Enterprise customers can browse listings and then acquire and install App Builder apps from [Adobe Exchange](https://exchange.adobe.com/apps/browse/ec).

### What are the steps to create an App Builder listing for public distribution?

1. Login or join the [Technology Partner Program (TPP)](https://partners.adobe.com/technologyprogram/experiencecloud.html). You will have to join the TPP as a Silver Member or above for your published listing to be displayed publicly. As a Community (free) Member, only an unlisted detail page URL will be available to share with potential customers. Upon TPP registration approval, an organization (org) will be assigned to your Adobe login credentials (Personal Account).
2. After your registration has been approved, submit a request for an App Builder Sandbox using the [TPP sandbox request ticket](https://partners.adobe.com/technologyprogram/experiencecloud/knowledgebase/db56212793bf8214fbe77b847aba1091.html).
3. Once you receive confirmation of your App Builder sandbox, go to [Developer Console](https://developer.adobe.com/developer-console/), add App Builder to a project, and create your App Builder app.​
4. Create and submit a new or updated listing for an App Builder app using Developer Distribution. You will be given the option to pick an existing project that you created in #3 (most common) or create the project in Developer Distribution and go back to the Console to add an API later.​

### If I previously created a private App Builder App via the App Builder Trial Sign up, can I distribute it publicly?

Yes, after you login or join the TPP program, you will be able to create an App Builder listing that can be associated with an existing Developer Console Project.

### Where can I get more information or help?

Learn how to build an App Builder app [App Builder documentation](https://developer.adobe.com/app-builder/docs/getting_started/).

Contact [TPP Support](https://partners.adobe.com/ec/cform/case).
