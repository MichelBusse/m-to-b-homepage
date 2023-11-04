---
date: '2023-10-31'
title: "What is Backend-as-a-Service (BaaS)?"
description: "Backend-As-A-Service (BaaS) refers to cloud solutions that minimize the typical administration effort and can thus speed up the development process."
image: "/images/blog/backend-as-a-service.png"
---

Like many app developers, we regularly have to deal with the question of which backend is the right one for our applications. The main choice is between two alternatives: a classic server or a backend-as-a-service solution.
While with a classic server you have complete control over all connections down to the smallest detail, the latter offers the advantage that you don't have to worry about standard functions such as authentication, security, database connection and server infrastructure. With Backend-As-A-Service you use a ready-made platform that has already implemented all important functions. In this way, you can deal directly with the actual app features and save yourself the administrative effort on the outside.

The most common backend-as-a-service solution is Google Firebase, a mature platform that offers powerful functions in almost all areas (A/B testing, databases, push notifications, cloud functions, ... ). Firebase comes with a pay-as-you-go pricing system. That means it offers very cheap entry-level prices and then gets more expensive as volume increases. It should be noted that Firebase is not open source, cannot be self-hosted and later data export can often be very time-consuming (not least due to the Firebase-exclusive database system).

As an alternative to Firebase, we have therefore already worked with the platforms Appwrite and Supabase. Both are open source projects that compete with Firebase, but both are also still actively developing. While Appwrite is more suitable for simpler applications, since the authorization settings are only very superficial, Supabase offers a real alternative to Google's Firebase.
We have already been able to implement entire apps with Supabase and were enthusiastic about the many possibilities that are already available despite its novelty. With authentication, a PostreSQL database system, cloud functions and real-time transfers, Supabase already offers all the features required for app development.
But it must also be mentioned here that Supabase causes more server resources and thus increasing costs with increasing capacities. It remains to be seen which high-volume platform like Supabase will actually do with hundreds of thousands of users, as the necessary reference projects are still missing.

Ultimately, the decision remains as to which backend to use for your app. You won't really go wrong with either Firebase or Supabase. The only choice here is whether you want to focus on a mature and proven system or on greater flexibility. 🚀