---
title: "NYU MSBA Capstone Project: Optimizing Nintendo's Marketing Strategies on Amazon"
excerpt: "NYU MS in Business Analytics Capstone Project: Utilizing marketing analytics to enhance online advertising.<br/><img src='/images/CapstoneMarkov.png'>"
collection: portfolio
---

## Project Background
This capstone analyzes Nintendo's marketing campaigns on the Amazon Advertising platform to improve the company's revenue. The analysis quantifies the influence of marketing touchpoints, such as display ads and promoted product listings, to optimize strategies that increase sales and elevate brand visibility. Through Multi-Touch Attribution (MTA) and Marketing Mix Modeling (MMM), the project will analyze two comprehensive datasets to determine the efficacy of different advertising elements. This project aims to provide actionable insights for Nintendo to allocate their advertising budget more effectively on the Amazon Advertising platform.

## Datasets and Exploratory Data Analysis: Overview  

The team utilized two datasets obtained from Amazon to evaluate Nintendo's marketing strategies using both MTA and MMM models. The first dataset focuses on user purchase paths on the platform, detailing user interactions with six types of Amazon ads:

* Awareness Sponsored Product Ads (A_SP): These ads target users at the top of the marketing funnel and aim to increase brand visibility and product awareness.

* Awareness Search Ads (A_SA): These ads capture users actively seeking information or products related to Nintendo on Amazon's search engine.

* Consideration Online Video Ads (C_OLV): These ads, displayed on platforms like Amazon Prime Video and Fire TV, target users in the consideration phase who are exploring options and seeking more in-depth information about Nintendo products.

* Consideration DSP Display Ads (C_DSP-DIS): These ads target users who have shown interest in gaming or related categories and are actively browsing across different websites and apps.

* Purchase Sponsored Products Ads (P_SP): These ads, typically product-centric, appear prominently in Amazon search results or on product detail pages.

* Purchase O&O Search Ads (P_OO-SA): These search ads, placed on Amazon's search engine, promote products sold directly by Amazon.

* A sample record from the first dataset is as follows:

| path_id | converters | nonconverters | str_path                              |
|---------|------------|---------------|---------------------------------------|
| 1600    | 2          | 8             | 3&P_OO-SA@1&P_SP@4&P_SP@2&P_SP        |



This record illustrates the shopping journey of 10 users, two of whom converted. The sequence "str_path" depicts the four touchpoints in their journey, starting with Purchase Sponsored Product Ads.

* The second dataset contains revenue and spending data for each advertising channel across the three stages of the marketing funnel: Awareness, Consideration, and Purchase. This dataset includes detailed metrics for various ad products and formats, including Fire TV Display, Streaming TV, Online Video, DSP Display, and Sponsored Products. The granular data on marketing spending and sales revenue, segmented by advertising channels and time periods, allows for analyzing longitudinal patterns and seasonal fluctuations in Nintendo's sales on Amazon.

## Executive Summary

Analysis through the MTA model using the Python package ChannelAttribution.io reveals that Purchase Sponsored Products Ads are highly effective for Nintendo on Amazon. They play a dominant role in conversions across all attribution models, initiating customer interest and driving purchase decisions. The MMM analysis using the Robyn model from Meta in python provides insights into the effectiveness of budget allocation, suggesting that redirecting funds to Awareness Streaming TV and Purchase O&O Display Ads can significantly enhance response rates and overall marketing ROI.

## Insights Deep Dive

The MTA analysis, conducted using both the full dataset and a subset excluding single-channel paths, consistently shows the dominance of Purchase Sponsored Product Ads in driving conversions. The Markov model highlights the importance of mid-funnel interactions, particularly Purchase O&O Search Ads, in guiding customers toward purchase. The Markov transition matrix reveals that while certain channels may not directly lead to conversions, they play a crucial role in increasing brand exposure, ultimately contributing to the conversion process. In the MMM analysis, response decomposition waterfalls and ROI analysis indicate that Awareness Streaming TV and Purchase O&O Display Ads are the most efficient channels in terms of spend-to-effect ratio. The response curves reveal that investing in these channels, even with moderate budget increases, can yield significant returns.

## Recommendations

Based on the analysis, the Adflow+ capstone team recommends that Nintendo prioritizes high-impact channels, such as Purchase Sponsored Products Ads, due to their consistent conversion success. Additionally, the report advises reassessing mid-funnel strategies, particularly those involving Purchase O&O Search Ads, which are crucial in guiding customer decision-making. Furthermore, diversifying marketing efforts by leveraging channels like Consideration DSP Display Ads and Awareness Search Ads is recommended to expand reach and influence across various stages of the customer journey. The video ad strategy should be optimized by leveraging platforms like Fire TV Display Ads and Consideration Online Video Ads to enhance brand awareness and engagement. Lastly, implementing a dynamic budget allocation strategy, based on the Robyn model's insights, is crucial to maximize ROI by directing resources toward the most effective channels like Awareness Streaming TV and Purchase O&O Display Ads.