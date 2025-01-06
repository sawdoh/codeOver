# Welcome to NewsPaperTrade!

Hi! This project **NewsPaperTrade** was made for the 2024 Code Overflow Hackathon.


# Features
**NewsPaperTrade** has two main features.
1. Stock market Simulator

```mermaid
sequenceDiagram
    participant User
    participant App

    User->>App: Start Game
    App-->>User: Present Scenario 1
    App-->>User: Show Market Context
    User->>App: Decide Buy/Sell
    App-->>User: Show Correct Answer & Explanation
    App-->>User: Update Score

    App-->>User: Present Scenario 2
    App-->>User: Show Market Context
    User->>App: Decide Buy/Sell
    App-->>User: Show Correct Answer & Explanation
    App-->>User: Update Score

    App-->>User: Present Scenario 3
    App-->>User: Show Market Context
    User->>App: Decide Buy/Sell
    App-->>User: Show Correct Answer & Explanation
    App-->>User: Display Final Score

    User->>App: End Game

```

2. Education Hub
Various information about investing and trading concepts are displayed. Information was aggregated from reputable sources such as https://www.investopedia.com/ 
