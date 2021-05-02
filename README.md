# Welcome to BRenB!

### **Live Link: [BRenB](https://brenb.herokuapp.com/)**

_BRenB_, a pixel perfect [Airbnb](https://airbnb.com/) clone, is a single page application that allows users to host and rent homes. Users can view browse, create, and cancel bookings on their profile page.


### Home View
![]

### Spots View
![]


### Technologies used:
* JavaScript
* React.js
* Redux
* CSS
* Express
* Sequelize
* PostgreSQL
* Heroku
* Google Maps API

## [MVP List](https://github.com/rsdimatulac/BRenB/wiki/MVP-List)
List of MVP Features.

## [Database Schema](https://github.com/rsdimatulac/BRenB/wiki/Database-Schema)
PostgreSQL Database Schema.

## [API Routes](https://github.com/rsdimatulac/BRenB/wiki/API-Routes)
API routes used by the frontend for accessing the database from the backend and dynamically update the page. 

## [Frontend Routes](https://github.com/rsdimatulac/BRenB/wiki/Frontend-Routes)
Routes that return a page that the user can interact with.

## [React Components](https://github.com/rsdimatulac/BRenB/wiki/React-Components)
List of React components rendered on this application.

### Code Snippets
- This function triggers the theme change of the Navbar when scroll event happens.
``` js
window.onscroll = function () {
        if (window.pageYOffset > 0) {
            setLogo(Logo);
            setDark("");
        } else if (window.pageYOffset === 0) {
            setLogo(LogoBNW);
            setDark("dark");
        };
    };
```

- Renders each listing result as a link on the Search Page.

``` js
{Array.from(listings)?.map(listing => (
    <NavLink to={`/listings/${listing?.id}`} style={{ textDecoration: "none" }} key={listing?.id}>
        <SearchResult listing={listing} />
    </NavLink>
))}
```

- Date conversion using `date-fns` package and number formatting using built-in JavaScript methods.

``` js
const startDate = format(booking?.check_in, "MMM dd");
const endDate = format(booking?.check_out, "dd, yyyy");
const num_nights = differenceInCalendarDays(booking?.check_out, booking?.check_in);
let price = (listing?.price * num_nights);
const cleaning = 27.00;
const service = 16.94;
const taxes = ((price + cleaning + service) * 0.13).toLocaleString(undefined, { maximumFractionDigits: 2 });
const total = (price + cleaning + service + Number(taxes)).toLocaleString(undefined, { maximumFractionDigits: 2 });
price = new Intl.NumberFormat().format(price);
```
