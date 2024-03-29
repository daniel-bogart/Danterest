![Danterest Logo](app/assets/images/danterestLogo.png)

# Danterest
[Danterest](https://danterestt.herokuapp.com/#/) is a web-based app for browsing, uploading, saving, and sorting photos called 'pins' into custom 'boards' based on interests.

## Demo:
The live working demo can be found here:
### [Danterest](https://danterestt.herokuapp.com/#/)

## Site:
### Splash Page
The splash page allows users to sign-in or create a new account. Errors will be rendered if the email is already taken or if the password is too short.

![Splash Page](app/assets/images/danterest_splash2.gif)

### Signup Modal
The signup modal allows users to login to their account. Errors will render if the user enters incorrect login information.

![Signup Modal](app/assets/images/sign-up.png)

### Signin Modal
The signup modal allows users to login to their account. Errors will render if the user enters incorrect login information.

![Signin Modal](app/assets/images/sign-in.png)

### Home Page
The home page of Danterest includes an assortment of pins that users can click on and explore, a navigation bar where users can navigate to their profiles,
a sign out button, a search bar, and a home button.

![Home Page](app/assets/images/home-page.png)

### Create Pin
The create pin page allows users to upload a photo and a description that will be visible to anyone. The user can also update their pin if they choose by clicking
the dropdown menu from the three dots.

![Create Pin](app/assets/images/create_pin.png)

### User Page
The user page is where one place where users can create pins and boards, as well as access them. The User Page is also where users can edit their profile information.

![User Page](app/assets/images/user_page.png)

## Featured Code:
### Masonry / Lazy Loading
As a full-stack clone of Pinterest, Masonry is absolutely a defining feature. Masonry can be tricky, considering that you need to auto adjust for screen size. But, of course, since Pinterest has an extremely large number of pins, it becomes expensive and highly inefficient to load pins that are not on the screen. 
Using intersectional observer, Danterest is able to detect whether or not an element is on the screen and load it only when it comes into view, shaving on expensive and unnecessary rendering.
```
.masonry {
  column-count: 8;
  column-gap: 0.5em;
  margin: 1.5em auto;
  max-width: 100vw;
  box-sizing: border-box;
  padding: 10px;
  column-width: 305px;
}

@media only screen and (max-width: 1201px) {
  .masonry {
    column-count: 4;
    column-gap: 0.5em;
    margin: 1.5em auto;
    max-width: 100vw;
    box-sizing: border-box;
    padding: 10px;
    column-width: 305px;
  }
}
-----------------------------------------------
  <ul className="masonry">
  {this.props.pins.map((pin) => {
    return (
      <li className="index-pin" key={pin.id}>
        <PinIndexItem className="index-pin" pin={pin}/>
        <h3>{pin.title}</h3>
      </li>
    );
  })}
  </ul>

-----------------------------------------------
function PinIndexItem(props) {
  const supportsLazyLoading = useNativeLazyLoading()

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
    skip: supportsLazyLoading === true
  })


  return (
    <div
      ref={ref}
      data-inview={inView}
    > {inView || supportsLazyLoading ? (
        <Link to={`/pins/${props.pin.id}`}>
          <img 
            alt="pin-image"
            className="pin-image" 
            src={props.pin.photoUrl}
          />
        </Link>
    ) : null}
    </div>
  )
}
```
### Pin Create

Pins are created by appending attributes to formData which is passed as a pin object to the backend.
```

  async handleClick() {
    const {title, description, userId, photoFile} = this.state;
    const formData = new FormData();
    formData.append('pin[title]', title);
    formData.append('pin[description]', description);
    formData.append('pin[author_id]', userId);
    if (photoFile){
      formData.append('pin[photo]', photoFile)
    };
    this.props.createPin(formData)
      .then( pin => this.props.savePin({board_id: this.props.board.id, pin_id: pin.pin.id}))
      this.props.openModal('saved-pin');
  }
```