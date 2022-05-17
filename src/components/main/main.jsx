import React, { Component } from "react";
import Added from "./added/added";
//css
import './main.css'
import Output from "./output/output";


class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      listContactArr: [
        {
          name: 'Colleague',
          fullname: 'Eshmat',
          number: 998991234567,
          categores: 'Colleague'
        },
      ],

      userContact: [
        {
          name: 'Colleague',
          fullname: 'Eshmat',
          number: 998991234567,
          categores: 'Colleague'
        },
      ],

      listObj: {
        name: undefined,
        fullname: undefined,
        number: undefined,
        categores: undefined
      },
    }
  }


  render() {

    //add object part
    let typeHandler = (type) => {
      let id = type.target.id
      let val = type.target.value
      let obj = {}

      if(id === 'name'){
        obj.name = val
      }
      if(id === 'fname'){
        obj.fullname = val
      }
      if(id === 'number'){
        obj.number = val
      }
      if(id === 'contact-cat'){
        obj.categores = val
      }

      this.setState({listObj: {...this.state.listObj, ...obj}})
    }

    ///added part
    let onSubmit = (e) => {
      e.preventDefault();
      this.setState({
        listContactArr: [...this.state.listContactArr, {...this.state.listObj}]
      })

      this.setState({
        userContact: [...this.state.userContact, {...this.state.listObj}]
      })

      e.target.reset()
    }

    //sort part
    let sort = (e) => {
      const ids = e.target.id
      const users = this.state.userContact
      console.log(this.state.userContact)

      users.map((item) => {
        if(ids === item.categores) {
          // console.log(item)
          this.setState({
            listContactArr: [this.state.listContactArr = item]
          })
        }
        if(ids === 'All') {
          // console.log(item)
          // console.log(this.state.userContact)
          this.setState({
            listContactArr: [this.state.listContactArr, ...this.state.userContact]
          })
        }
    })

    // console.log(this.state.listContactArr)


    }
    return (
          <section className="contact">
            <div className="contact__boxs">
              <Added
              types={typeHandler}
              onSubmit={onSubmit}/>
              <Output
              person={this.state.listContactArr}
              sort={sort}
              />
            </div>
          </section>
    )
  }
}

export default Main