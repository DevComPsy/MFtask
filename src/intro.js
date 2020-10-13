import React, { Component } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css'
import './style/questionnaires.css';
import 'react-showdown';
import './style/intro.css';
import queryString from 'query-string';


class Consent extends Component {

  constructor(props) {
    super(props);

    //console.log(this.props.location)
    let url    = this.props.location.search;
    //console.log("url", url)
    let params = queryString.parse(url);
    //console.log("params", params)
    const prolific_id = (params['PROLIFIC_PID']=== undefined ? 'undefined' : params['PROLIFIC_PID'])
    //console.log("prolific_id", prolific_id)
    const task_no = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100;
    const training_no = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100;

    var currentDate   = new Date();
    var date          = currentDate.getDate();
    var month         = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year          = currentDate.getFullYear();
    var dateString    = date + "-" +(month + 1) + "-" + year;
    var timeString    = currentDate.toTimeString();

    this.state = {
      prolific_id: prolific_id,
      ConsentCompleted: 0,
      date: dateString,
      startTime: timeString,
      task_no: task_no,
      training_no: training_no,

      images_fb:["http://www.brainexplorer.net/MF/images_training/thumbs_up.png", "http://www.brainexplorer.net/MF/images_training/thumbs_down.png"],

      training_bg:["http://www.brainexplorer.net/MF/images_training/training_1_empty.png","http://www.brainexplorer.net/MF/images_training/training_2_empty.png","http://www.brainexplorer.net/MF/images_training/training_3_empty.png","http://www.brainexplorer.net/MF/images_training/training_4_empty.png"],

      instruc_bg:["http://www.brainexplorer.net/MF/instructions/slide_empty_1arrow.png", "http://www.brainexplorer.net/MF/instructions/slide_empty_2arrows.png", "http://www.brainexplorer.net/MF/instructions/slide6.png", "http://www.brainexplorer.net/MF/instructions/slide7.png", "http://www.brainexplorer.net/MF/instructions/slide8.png", "http://www.brainexplorer.net/MF/instructions/slide9.png", "http://www.brainexplorer.net/MF/instructions/slide10.png", "http://www.brainexplorer.net/MF/instructions/slide11.png", "http://www.brainexplorer.net/MF/instructions/slide12.png", "http://www.brainexplorer.net/MF/instructions/slide13.png", "http://www.brainexplorer.net/MF/instructions/slide14.png", "http://www.brainexplorer.net/MF/instructions/slide15.png", "http://www.brainexplorer.net/MF/instructions/slide16.png", "http://www.brainexplorer.net/MF/instructions/slide17.png", "http://www.brainexplorer.net/MF/instructions/slide18.png"],

      questions_bg:["http://www.brainexplorer.net/MF/instructions/slide_empty_0arrow.png"],

      loading_bg: ["http://www.brainexplorer.net/MF/loading.jpg"],

      training_apple_col:["http://www.brainexplorer.net/MF/images_training/apple_1.png","http://www.brainexplorer.net/MF/images_training/apple_2.png","http://www.brainexplorer.net/MF/images_training/apple_3.png","http://www.brainexplorer.net/MF/images_training/apple_4.png"],

      image_bg_1:["http://www.brainexplorer.net/MF/images_set1/sun_1.png", "http://www.brainexplorer.net/MF/images_set1/sun_2.png", "http://www.brainexplorer.net/MF/images_set1/sun_3.png", "http://www.brainexplorer.net/MF/images_set1/sun_4.png", "http://www.brainexplorer.net/MF/images_set1/sun_5.png", "http://www.brainexplorer.net/MF/images_set1/sun_6.png", "http://www.brainexplorer.net/MF/images_set1/sun_7.png"],
      image_bg_2:["http://www.brainexplorer.net/MF/images_set2/sun_1.png", "http://www.brainexplorer.net/MF/images_set2/sun_2.png", "http://www.brainexplorer.net/MF/images_set2/sun_3.png", "http://www.brainexplorer.net/MF/images_set2/sun_4.png", "http://www.brainexplorer.net/MF/images_set2/sun_5.png", "http://www.brainexplorer.net/MF/images_set2/sun_6.png", "http://www.brainexplorer.net/MF/images_set2/sun_7.png"],
      image_bg_3:["http://www.brainexplorer.net/MF/images_set3/sun_1.png", "http://www.brainexplorer.net/MF/images_set3/sun_2.png", "http://www.brainexplorer.net/MF/images_set3/sun_3.png", "http://www.brainexplorer.net/MF/images_set3/sun_4.png", "http://www.brainexplorer.net/MF/images_set3/sun_5.png", "http://www.brainexplorer.net/MF/images_set3/sun_6.png", "http://www.brainexplorer.net/MF/images_set3/sun_7.png"],
      image_bg_4:["http://www.brainexplorer.net/MF/images_set4/sun_1.png", "http://www.brainexplorer.net/MF/images_set4/sun_2.png", "http://www.brainexplorer.net/MF/images_set4/sun_3.png", "http://www.brainexplorer.net/MF/images_set4/sun_4.png", "http://www.brainexplorer.net/MF/images_set4/sun_5.png", "http://www.brainexplorer.net/MF/images_set4/sun_6.png", "http://www.brainexplorer.net/MF/images_set4/sun_7.png"],
      image_bg_5:["http://www.brainexplorer.net/MF/images_set5/sun_1.png", "http://www.brainexplorer.net/MF/images_set5/sun_2.png", "http://www.brainexplorer.net/MF/images_set5/sun_3.png", "http://www.brainexplorer.net/MF/images_set5/sun_4.png", "http://www.brainexplorer.net/MF/images_set5/sun_5.png", "http://www.brainexplorer.net/MF/images_set5/sun_6.png", "http://www.brainexplorer.net/MF/images_set5/sun_7.png"],
      image_bg_6:["http://www.brainexplorer.net/MF/images_set6/sun_1.png", "http://www.brainexplorer.net/MF/images_set6/sun_2.png", "http://www.brainexplorer.net/MF/images_set6/sun_3.png", "http://www.brainexplorer.net/MF/images_set6/sun_4.png", "http://www.brainexplorer.net/MF/images_set6/sun_5.png", "http://www.brainexplorer.net/MF/images_set6/sun_6.png", "http://www.brainexplorer.net/MF/images_set6/sun_7.png"],
      image_bg_7:["http://www.brainexplorer.net/MF/images_set7/sun_1.png", "http://www.brainexplorer.net/MF/images_set7/sun_2.png", "http://www.brainexplorer.net/MF/images_set7/sun_3.png", "http://www.brainexplorer.net/MF/images_set7/sun_4.png", "http://www.brainexplorer.net/MF/images_set7/sun_5.png", "http://www.brainexplorer.net/MF/images_set7/sun_6.png", "http://www.brainexplorer.net/MF/images_set7/sun_7.png"],
      image_bg_8:["http://www.brainexplorer.net/MF/images_set8/sun_1.png", "http://www.brainexplorer.net/MF/images_set8/sun_2.png", "http://www.brainexplorer.net/MF/images_set8/sun_3.png", "http://www.brainexplorer.net/MF/images_set8/sun_4.png", "http://www.brainexplorer.net/MF/images_set8/sun_5.png", "http://www.brainexplorer.net/MF/images_set8/sun_6.png", "http://www.brainexplorer.net/MF/images_set8/sun_7.png"],

      juice_small_bg:["http://www.brainexplorer.net/MF/juice_small/juice1.png", "http://www.brainexplorer.net/MF/juice_small/juice2.png", "http://www.brainexplorer.net/MF/juice_small/juice3.png", "http://www.brainexplorer.net/MF/juice_small/juice4.png", "http://www.brainexplorer.net/MF/juice_small/juice5.png", "http://www.brainexplorer.net/MF/juice_small/juice6.png", "http://www.brainexplorer.net/MF/juice_small/juice7.png", "http://www.brainexplorer.net/MF/juice_small/juice8.png", "http://www.brainexplorer.net/MF/juice_small/juice9.png", "http://www.brainexplorer.net/MF/juice_small/juice10.png"],
      juice_big_bg:["http://www.brainexplorer.net/MF/juice_big/juice1.png", "http://www.brainexplorer.net/MF/juice_big/juice2.png", "http://www.brainexplorer.net/MF/juice_big/juice3.png", "http://www.brainexplorer.net/MF/juice_big/juice4.png", "http://www.brainexplorer.net/MF/juice_big/juice5.png", "http://www.brainexplorer.net/MF/juice_big/juice6.png", "http://www.brainexplorer.net/MF/juice_big/juice7.png", "http://www.brainexplorer.net/MF/juice_big/juice8.png", "http://www.brainexplorer.net/MF/juice_big/juice9.png", "http://www.brainexplorer.net/MF/juice_big/juice10.png"],

      block_start_bg:["http://www.brainexplorer.net/MF/block_images/startblock_1.jpg", "http://www.brainexplorer.net/MF/block_images/startblock_2.jpg", "http://www.brainexplorer.net/MF/block_images/startblock_3.jpg", "http://www.brainexplorer.net/MF/block_images/startblock_4.jpg"],
      block_finish_bg:["http://www.brainexplorer.net/MF/block_images/finishblock_4.jpg"],

      apple_col1:["http://www.brainexplorer.net/MF/images_set1/apple_1.png","http://www.brainexplorer.net/MF/images_set1/apple_2.png","http://www.brainexplorer.net/MF/images_set1/apple_3.png"],
      apple_col2:["http://www.brainexplorer.net/MF/images_set2/apple_1.png","http://www.brainexplorer.net/MF/images_set2/apple_2.png","http://www.brainexplorer.net/MF/images_set2/apple_3.png"],
      apple_col3:["http://www.brainexplorer.net/MF/images_set3/apple_1.png","http://www.brainexplorer.net/MF/images_set3/apple_2.png","http://www.brainexplorer.net/MF/images_set3/apple_3.png"],
      apple_col4:["http://www.brainexplorer.net/MF/images_set4/apple_1.png","http://www.brainexplorer.net/MF/images_set4/apple_2.png","http://www.brainexplorer.net/MF/images_set4/apple_3.png"],
      apple_col5:["http://www.brainexplorer.net/MF/images_set5/apple_1.png","http://www.brainexplorer.net/MF/images_set5/apple_2.png","http://www.brainexplorer.net/MF/images_set5/apple_3.png"],
      apple_col6:["http://www.brainexplorer.net/MF/images_set6/apple_1.png","http://www.brainexplorer.net/MF/images_set6/apple_2.png","http://www.brainexplorer.net/MF/images_set6/apple_3.png"],
      apple_col7:["http://www.brainexplorer.net/MF/images_set7/apple_1.png","http://www.brainexplorer.net/MF/images_set7/apple_2.png","http://www.brainexplorer.net/MF/images_set7/apple_3.png"],
      apple_col8:["http://www.brainexplorer.net/MF/images_set8/apple_1.png","http://www.brainexplorer.net/MF/images_set8/apple_2.png","http://www.brainexplorer.net/MF/images_set8/apple_3.png"],

    };

    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }

  onCompleteComponent(survey) {

    this.setState({
      ConsentCompleted: 1,
    });
  }

  componentDidMount() {

    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

    var training_bg = this.state.training_bg;
    var instruc_bg = this.state.instruc_bg;
    var questions_bg = this.state.questions_bg;
    var loading_bg = this.state.loading_bg;
    var image_bg_1 = this.state.image_bg_1;
    var image_bg_2 = this.state.image_bg_2;
    var image_bg_3 = this.state.image_bg_3;
    var image_bg_4 = this.state.image_bg_4;
    var image_bg_5 = this.state.image_bg_5;
    var image_bg_6 = this.state.image_bg_6;
    var image_bg_7 = this.state.image_bg_7;
    var image_bg_8 = this.state.image_bg_8;
    var juice_small_bg = this.state.juice_small_bg;
    var juice_big_bg = this.state.juice_big_bg;
    var block_start_bg = this.state.block_start_bg;
    var block_finish_bg = this.state.block_finish_bg;
    var apple_col1 = this.state.apple_col1;
    var apple_col2 = this.state.apple_col2;
    var apple_col3 = this.state.apple_col3;
    var apple_col4 = this.state.apple_col4;
    var apple_col5 = this.state.apple_col5;
    var apple_col6 = this.state.apple_col6;
    var apple_col7 = this.state.apple_col7;
    var apple_col8 = this.state.apple_col8;

    var training_apple_col = this.state.training_apple_col;

    instruc_bg.forEach(image => { new Image().src = image })
    training_bg.forEach(image => { new Image().src = image })
    questions_bg.forEach(image => { new Image().src = image })
    loading_bg.forEach(image => { new Image().src = image })
    training_apple_col.forEach(image => { new Image().src = image })
    image_bg_1.forEach(image => { new Image().src = image })
    image_bg_2.forEach(image => { new Image().src = image })
    image_bg_3.forEach(image => { new Image().src = image })
    image_bg_4.forEach(image => { new Image().src = image })
    image_bg_5.forEach(image => { new Image().src = image })
    image_bg_6.forEach(image => { new Image().src = image })
    image_bg_7.forEach(image => { new Image().src = image })
    image_bg_8.forEach(image => { new Image().src = image })
    juice_small_bg.forEach(image => { new Image().src = image })
    juice_big_bg.forEach(image => { new Image().src = image })
    block_finish_bg.forEach(image => { new Image().src = image })
    block_start_bg.forEach(image => { new Image().src = image })
    apple_col1.forEach(image => { new Image().src = image })
    apple_col2.forEach(image => { new Image().src = image })
    apple_col3.forEach(image => { new Image().src = image })
    apple_col4.forEach(image => { new Image().src = image })
    apple_col5.forEach(image => { new Image().src = image })
    apple_col6.forEach(image => { new Image().src = image })
    apple_col7.forEach(image => { new Image().src = image })
    apple_col8.forEach(image => { new Image().src = image })

    this.setState({
      instruc_bg: instruc_bg,
      training_bg: training_bg,
      questions_bg: questions_bg,
      image_bg_1: image_bg_1,
      image_bg_2: image_bg_2,
      image_bg_3: image_bg_3,
      image_bg_4: image_bg_4,
      image_bg_5: image_bg_5,
      image_bg_6: image_bg_6,
      image_bg_7: image_bg_7,
      image_bg_8: image_bg_8,
      apple_col1: apple_col1,
      apple_col2: apple_col2,
      apple_col3: apple_col3,
      apple_col4: apple_col4,
      apple_col5: apple_col5,
      apple_col6: apple_col6,
      apple_col7: apple_col7,
      apple_col8: apple_col8,
      juice_small_bg: juice_small_bg,
      juice_big_bg: juice_big_bg,
      block_finish_bg: block_finish_bg,
      block_start_bg: block_start_bg,
      loading_bg: loading_bg,
      training_apple_col: training_apple_col,
      mounted: 1,
    });
  }

  render() {

    this.props.history.push({
      pathname: `/Task`,
      state: {user_info: this.state}
    })

    return null
  }
}

export default Consent;
