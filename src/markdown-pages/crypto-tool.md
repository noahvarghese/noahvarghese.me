---
slug: "/projects/crypto-tool/"
date: "2020-05-25"
title: "Crypto Tool"
image: "/img/cryptoTool.png"
techStack:
    - "Ruby on Rails"
    - "PHP"
    - "openSSL"
description: "Built as an internal tool so I do not have plain text passwords stored in code, can be used as an API or manually with a basic frontend. Written originally in rails. Uses openSSL to encrypt/decrypt a given string. Rewritten in vanilla php so as to reduce unnecessary bloat. Currently uses Initialization Vector generated on install by user. Can be extended to use user specific iv's kept in database to differentiate encryption per user."
link: "https://github.com/noahvarghese/cryptoTool"
---