import React, { Component } from 'react';
import XMLParser from 'react-xml-parser';
import xml_data from './filmblog.xml';

class XMLloader extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.loadDoc();
  }

  loadDoc() {
    console.log(xml_data);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', xml_data, false);
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        const xmlAsString = xmlhttp.responseText;
        console.log('Your xml file as string', xmlAsString);
  
        const jsonDataFromXml = new XMLParser().parseFromString(xmlAsString);
        console.log(jsonDataFromXml);
  
        const parsedXML = new XMLParser().parseFromString(xmlAsString);
  
        const post = parsedXML.getElementsByTagName('post')[0];
        const title = post.getElementsByTagName('title')[0].textContent;
        const author = post.getElementsByTagName('author')[0].textContent;
        const date = post.getElementsByTagName('date')[0].textContent;
        const imagePath = post.getElementsByTagName('image_path')[0];
        const body = post.getElementsByTagName('body')[0].textContent;
  
        const blogContent = { title, author, date, imagePath, body };
        if (typeof this.props.onLoad === 'function') {
          this.props.onLoad(blogContent);
        }
        
        console.log('blogContent:', blogContent);
  
        this.setState({ data: parsedXML });
      }
    };
    xmlhttp.send();
  }
  

  render() {
    const { data } = this.state;
    console.log(data);
    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{this.state.data.getElementsByTagName('title')[0].value}</h1>
        <img src= {this.state.data.getElementsByTagName('image_path')[0].value}/>
        <p>{this.state.data.getElementsByTagName('author')[0].value}</p>
        <p>{this.state.data.getElementsByTagName('date')[0].value}</p>
        <p>{this.state.data.getElementsByTagName('body')[0].value}</p>
        <h1>{this.state.data.getElementsByTagName('title')[1].value}</h1>
        <img src= {this.state.data.getElementsByTagName('image_path')[1].value}/>
        <p>{this.state.data.getElementsByTagName('author')[1].value}</p>
        <p>{this.state.data.getElementsByTagName('date')[1].value}</p>
        <p>{this.state.data.getElementsByTagName('body')[1].value}</p>
        <h1>{this.state.data.getElementsByTagName('title')[2].value}</h1>
        <img src= {this.state.data.getElementsByTagName('image_path')[2].value}/>
        <p>{this.state.data.getElementsByTagName('author')[2].value}</p>
        <p>{this.state.data.getElementsByTagName('date')[2].value}</p>
        <p>{this.state.data.getElementsByTagName('body')[2].value}</p>
      </div>
    );
  }
}

export default XMLloader;
