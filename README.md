# Welcome to BRenB!

### **Live Link: [BRenB](https://brenb.herokuapp.com/)**

_[BRenB](https://brenb.herokuapp.com/)_, an [Airbnb](https://airbnb.com/) clone, is a single page application that allows users to host and rent homes. Users can view browse, create, and cancel bookings on their profile page.




## Prerequisites
Before you begin, please check the follwing Wiki documents:
* [MVP List](https://github.com/rsdimatulac/BRenB/wiki/MVP-List)
* [Database Schema](https://github.com/rsdimatulac/BRenB/wiki/Database-Schema)
* [API Routes](https://github.com/rsdimatulac/BRenB/wiki/API-Routes)
* [Frontend Routes](https://github.com/rsdimatulac/BRenB/wiki/Frontend-Routes)
* [React Components](https://github.com/rsdimatulac/BRenB/wiki/React-Components)

## Technologies used:
#### Backend
* Sequelize
* PostgreSQL
* `express`, `express-validator`
* `csurf`, `dotenv`, `nodemon`, `cors`, `cookie-parser`
* `bcryptjs`, `jsonwebtoken`
#### Frontend
* JavaScript
* HTML, Vanilla CSS
* React.js
* Redux
* Heroku (for hosting services)
* Google Maps API
* `react-icons`, `react-nice-dates`, `date-fns`

### Code Highlights / Challenges

#### Highlights 

- Nested Sequelize queries to retrieve all `Bookings` made by the user ordered by check in date including the `Listing` and `Image` ordered by image id.
``` js
router.get('/users/:id(\\d+)/bookings', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const bookings = await Booking.findAll({
        where: { user_id: userId },
        include: [
            {
                model: Listing,
                include: {
                    model: Image,
                    attributes: ["id", "url"],
                },
            },
        ],
        order: [
            ["check_in", "ASC"],
            [Listing, Image, "id", "ASC"]
        ]
    });
    return res.json(bookings);
}));
```

- This function triggers the theme change of the Navbar when scroll event occurs. It is wrapped in a `useEffect` returning a clean up function that removes the listener to prevent memory leak.
``` js
useEffect(() => {
    const scrollFunction = function () {
        if (window.pageYOffset > 0) {
            setLogo(Logo);
            setDark("");
        } else if (window.pageYOffset === 0) {
            setLogo(LogoBNW);
            setDark("dark");
        }
    };
    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
}, []);
```

- Renders each markers on the Google Maps, taking in latitude and longitude coordinates, that are linked on the listing id.

``` js
{listings.map(listing => (
    <Marker 
        key={listing.id}
        position={{ lat: listing.latitude, lng: listing.longitude}}
        label={{color: 'white', fontWeight: '600', fontSize: '14px', text: `$${listing.price}`}}
        icon={{
            url: CustomMarker,
            scaledSize: new window.google.maps.Size(42, 35),
            labelOrigin: new window.google.maps.Point(21, 13),
            anchor: new window.google.maps.Point(15, 15)
        }}
        animation={window.google.maps.Animation.DROP}
        clickable={true}
        onClick={() => handleClick(listing.id)}
    />
))}
```

- Date conversion using `date-fns` package and number formatting using built-in JavaScript methods.

``` js
const startDate = format(booking?.check_in, "MMM dd");
const endDate = format(booking?.check_out, "dd, yyyy");
const num_nights = differenceInCalendarDays(booking?.check_out, booking?.check_in);
let price = (listing?.price * num_nights);
const cleaning = 27.00;
const service = 19.93;
const taxes = ((price + cleaning + service) * 0.13).toLocaleString(undefined, { maximumFractionDigits: 2 });
const total = (price + cleaning + service + parseFloat(taxes)).toLocaleString(undefined, { maximumFractionDigits: 2 });
price = new Intl.NumberFormat().format(price);
```
#### Challenges
- One of the most challenging aspects of this project was creating a booking by using `react-nice-dates` to save the state of checkin and checkout dates. I also find it challenging to learn how to use packages such as `react-icons` for my icons, `date-fns` to get the difference in days, convert to ISO dates using `parseISO` and format dates using `format`, and built-in JavaScript `toLocaleString` and `Intl.NumberFormat()` to convert and format numbers to save the state of total cost render booking detail computations.

- Another challenging aspect was implementing Google Maps API on the search page. It involved reading documentation to figure out the properties to use, to fix rendering issues, and avoid API Key errors. Adding clickable Markers on the map that are linked to the listing and using the correct properties to style them was the most rewarding part of this challenge. 

- One of the designing challenges was changing the theme color of the Navbar on a scroll event. It involved using a `window.onscroll` event listener that will set the theme when `window.pageYOffset` changes. Rendering images was a challenge too, but I overcame it by using AWS image bucket.

## Future Implementations 
- Search functionality by availability or location, and filtering by category.
- Users can create, edit, or delete reviews on bookings they made in the past.
- Users can edit their profile.
- Loader function that will run when users switches from one page to another for better UX.
- Implement a host user which can create a listing.
- Responsive design for desktop and mobile devices.

## BRenB Developer
- [@rsdimatulac](https://github.com/rsdimatulac) 🚁

---
_© 2021 BRenB. No rights reserved._
