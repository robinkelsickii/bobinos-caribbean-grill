# Bobino's Caribbean Grill

## Goals
- Create a splash page with a menu
- Generate:
    -Restaurant Name
    - Restaurant Address
    - Hours of Operation 
- Use API to get menu items
- Create a dynamic menu:
    - Dinner items (breakfast and lunch if i have time).
    - Render menu items from API 
    - Use a function to generate prices
    - Render menu items as an organism hierarchy 
- Use react to manage state 

### Classes (props and methods)
-Model (Page)
    - Page text
        - prop: restaurantName
        - prop: address
        - prop: hours
    - Images with food info and price (as a card)
        - method: showImage
        - Image/Info/Price(will be based on an algo that calculates price based on length of dish)
    - Buttons
        - Link to menu list 
        - 