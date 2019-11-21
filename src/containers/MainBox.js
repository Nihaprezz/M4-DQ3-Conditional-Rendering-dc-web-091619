import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super();

    this.state = {
      menuItem: Profile
    }
  }

  onMenuClick = (event) => {
    let currentOption = event.target.id.charAt(0).toUpperCase() + event.target.id.slice(1)
    console.log(currentOption)

    

    let component;
    if(currentOption === "Profile"){
      component = Profile
    } else if ( currentOption === "Photo"){
      component = Photos
    } else if ( currentOption === "Cocktail") {
      component = Cocktails
    } else if ( currentOption === "Pokemon") {
      component = Pokemon
    }


    this.setState({
      menuItem: component
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */


    return (
      <div>
        <MenuBar onMenuClick={this.onMenuClick}/>
        < this.state.menuItem />
      </div>
    )
  }

}

export default MainBox
