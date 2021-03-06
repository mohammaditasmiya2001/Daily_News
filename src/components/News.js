import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes  from 'prop-types'

export class News extends Component {
    
    
     articles= [
    {
        "source": {
            "id": "news24",
            "name": "news24"
        },
        "author": "TMZ Staff",
        "title": "MLB Announcer Jim Kaat Calls Yankees Ace Nestor Cortes 'Nestor The Molester' On-Air - TMZ",
        "description": "Longtime MLB announcer Jim Kaat referred to New York Yankees star Nestor Cortes as \"Nestor the Molester\" during a broadcast Thursday.",
        "url": "https://www.tmz.com/2022/06/03/jim-kaat-calls-yankees-ace-nestor-cortes-nestor-the-molester-on-broadcast/",
        "urlToImage": "https://imagez.tmz.com/image/f5/16by9/2022/06/03/f5bd37a9c9f54ccbbfda5b73250faa42_xl.jpg",
        "publishedAt": "2022-06-03T13:14:00Z",
        "content": "Longtime MLB announcer Jim Kaat has found himself embroiled in controversy yet again ... this time, it's because he referred to New York Yankees star Nestor Cortes as \"Nestor the Molester\" during a b… [+1880 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Zachary B. Wolf, CNN",
        "title": "Biden urges 10 Republican senators to join Democrats on gun-related legislation - CNN",
        "description": "President Joe Biden tried to turn a string of horrific mass shootings into momentum Thursday night, imploring 10 Republican senators to join Democrats on some -- any -- new gun-related legislation.",
        "url": "https://www.cnn.com/2022/06/02/politics/key-moments-from-biden-gun-speech/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220602194538-04-biden-gun-violence-remarks-060222-super-tease.jpg",
        "publishedAt": "2022-06-03T13:10:00Z",
        "content": "(CNN)President Joe Biden tried to turn a string of horrific mass shootings into momentum Thursday night, imploring 10 Republican senators to join Democrats on some -- any -- new gun-related legislati… [+8625 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Jaylen Brown caused the Warriors 'EPIC COLLAPSE' in the 4th quarter of Game 1 - JWill | KJM - ESPN",
        "description": "Jaylen Brown caused the Warriors 'EPIC COLLAPSE' in the 4th quarter of Game 1 😳 - JWill | KJMKeyshawn, JWill and Max react to the Boston Celtics' 120-108 wi...",
        "url": "https://www.youtube.com/watch?v=GSH3ANlUUlU",
        "urlToImage": "https://i.ytimg.com/vi/GSH3ANlUUlU/maxresdefault.jpg",
        "publishedAt": "2022-06-03T13:01:26Z",
        "content": null
    },
    {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "David Harrison",
        "title": "Employers Added 390,000 Jobs in May; Unemployment Steady at 3.6% - The Wall Street Journal",
        "description": "The economy extended a yearlong streak of strong gains in May. The jobless rate remained at 3.6%.",
        "url": "https://www.wsj.com/articles/may-jobs-report-unemployment-rate-2022-11654195243",
        "urlToImage": "https://images.wsj.net/im-556455/social",
        "publishedAt": "2022-06-03T12:53:00Z",
        "content": "The U.S. economy added jobs at a solid pace in May, extending the labor markets long stretch of gains.\r\nEmployers added 390,000 last month, the Labor Department said Friday. That was the slowest pace… [+97 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "NBA Finals: How Celtics won Game 1 by giving Warriors, Stephen Curry taste of their own medicine - CBS Sports",
        "description": "Boston's fourth-quarter run was marked by hot shooting, swift passing and small ball -- sound familiar?",
        "url": "https://www.cbssports.com/nba/news/nba-finals-how-celtics-won-game-1-by-giving-warriors-stephen-curry-taste-of-their-own-medicine/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/06/03/8338b483-cf93-4900-a5c7-07394131af94/thumbnail/1200x675/4f0d3c62de2be06a77856ea82b844e41/060222-marcussmartsteph.jpg",
        "publishedAt": "2022-06-03T12:30:00Z",
        "content": "SAN FRANCISCO -- A backbreaking barrage of 3-pointers that leaves the opponent cloaked in helplessness, searching for answers from a higher power. Players on the bench celebrating with earned arrogan… [+6697 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "https://www.theguardian.com/profile/david-tindall",
        "title": "French Open 2022 semi-finals: Rafael Nadal v Alexander Zverev – live! - The Guardian",
        "description": "Get all the latest from Roland Garros on men’s semi-finals day with our writers",
        "url": "https://www.theguardian.com/sport/live/2022/jun/03/french-open-2022-semi-finals-rafael-nadal-v-alexander-zverev-live-casper-ruud-marin-cilic",
        "urlToImage": "https://i.guim.co.uk/img/media/d76dcbca4ada5d5911ec8c8ffb7c2be247c1d14a/0_100_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=693eef31ee5edeeb73eb6e9a0a614b30",
        "publishedAt": "2022-06-03T12:22:00Z",
        "content": "Second set: Nadal* 7-6, 1-1 Zverev (* denotes server). Nadal quickly goes to 30-0, making Zverev stretch and hit long before the German tries a rare dropped shot and it pays off as a scampering Nadal… [+13039 chars]"
    },
    {
        "source": {
            "id": "entertainment-weekly",
            "name": "Entertainment Weekly"
        },
        "author": "Nick Romano",
        "title": "The Boys season 3 kicks off with electrifying Charlize Theron cameo | EW.com - Entertainment Weekly News",
        "description": "Let's talk about <em>that</em> cameo in the first 60 seconds of the premiere.",
        "url": "https://ew.com/tv/the-boys-season-3-charlize-theron-stormfront/",
        "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=115%2C91%2C1898%2C983&poi=%5B980%2C328%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F06%2F01%2FThe_Boys_11.jpg",
        "publishedAt": "2022-06-03T12:15:00Z",
        "content": "Warning: This article contains spoilers from The Boys season 3 premiere. \r\nLet's reiterate the above warning: there will be major — and we mean major — spoilers from The Boysseason 3 from here on out… [+4319 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Judson Jones, CNN Meteorologist",
        "title": "Tropical storm warnings issued for more of Florida, Cuba, Bahamas - CNN",
        "description": "Alex, the first named storm of the season, could form later today or tomorrow, threatening southern Florida.",
        "url": "https://www.cnn.com/2022/06/02/weather/tropical-storm-alex-possible-thursday/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220602103745-weather-satellite-noaa-20220602-super-tease.jpg",
        "publishedAt": "2022-06-03T12:06:00Z",
        "content": "(CNN)Before hitting Florida on Saturday, a broad swath of showers and thunderstorms over the Yucatán Peninsula could turn into Tropical Storm Alex or a tropical depression, the National Hurricane Cen… [+6892 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Max Foster, Lauren Said-Moorhouse and Joshua Berlinger, CNN",
        "title": "What we know about Queen Elizabeth II's health after she pulls out of jubilee thanksgiving service - CNN",
        "description": "With Queen Elizabeth II missing a service of thanksgiving on Friday at St Paul's Cathedral for her 70-year reign, questions are swirling about the health of the United Kingdom's 96-year-old monarch.",
        "url": "https://www.cnn.com/2022/06/03/uk/queen-elizabeth-ii-health-gbr-intl-scli/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220602073618-01-queen-elizabeth-ii-jubilee-balcony-0602-super-tease.jpg",
        "publishedAt": "2022-06-03T12:00:00Z",
        "content": null
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": null,
        "title": "Harini Logan wins 2022 Scripps National Spelling Bee - CBS News",
        "description": "The bee went to a spell-off for the first time in its history.",
        "url": "https://www.cbsnews.com/news/spelling-bee-harini-logan-wins-2022-scripps-national/",
        "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2022/06/03/6bc7d44a-07a3-4909-8388-693738ce5a02/thumbnail/1200x630/524fe5b29045fdedf6b7e252973408ff/harini-logan.jpg",
        "publishedAt": "2022-06-03T11:59:00Z",
        "content": "Harini Logan has been declared the winner of the 2022 Scripps National Spelling Bee in a historic spell-off, after several rounds left two spellers tied. It was her fourth time competing in the bee.\r… [+2122 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Julian Mark",
        "title": "Texas inmate Gonzalo Lopez, who escaped a prison bus, dies in shootout - The Washington Post",
        "description": "Authorities say Gonzalo Lopez, a Texas inmate who escaped a prison bus, killed four minors and an adult before dying in a shootout with law enforcement.",
        "url": "https://www.washingtonpost.com/nation/2022/06/03/gonzalo-lopez-dead-texas-escape/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RJXEYZ3IOJHNFCS7EZDVYSOYDQ.png&w=1440",
        "publishedAt": "2022-06-03T11:58:59Z",
        "content": "Placeholder while article actions load\r\nA Texas inmate who escaped from a prison bus last month died in a shootout with law enforcement officers Thursday night, hours after he is suspected of killing… [+4644 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Kevin Stankiewicz",
        "title": "5 things to know before the stock market opens Friday - CNBC",
        "description": "Stock futures were lower Friday morning ahead of the May jobs report.",
        "url": "https://www.cnbc.com/2022/06/03/5-things-to-know-before-the-stock-market-opens-friday.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107068247-Hawks-OB-Photo-220527-CC-PRESS-3.jpg?v=1653664472&w=1920&h=1080",
        "publishedAt": "2022-06-03T11:58:46Z",
        "content": "Here are the most important news, trends and analysis that investors need to start their trading day:\r\n1. Stock futures are lower after release of May jobs report\r\nTraders on the floor of the NYSE, M… [+5010 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Post"
        },
        "author": "Lee Brown",
        "title": "Johnny Depp's showbiz return after Amber Heard showdown will be an album with Jeff Beck - New York Post ",
        "description": "The “Pirates of the Caribbean” star has already joined the “Hi Ho Silver Lining” rocker on a series of high-profile UK gigs — even missing the court decision ruling that he …",
        "url": "https://nypost.com/2022/06/03/johnny-depps-showbiz-return-an-album-with-jeff-beck/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/06/johnny-depp-jeff-beck-new-album-comp-1.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2022-06-03T11:50:00Z",
        "content": "Johnny Depp is planning an official showbiz return after his victorious courtroom showdown with ex-wife Amber Heard a new album with guitar god Jeff Beck.\r\nThe “Pirates of the Caribbean” star has alr… [+2855 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "In full: Harry and Meghan join royals as they leave St Paul's Cathedral - Sky News",
        "description": "Prince Charles and Camilla, the Duke and Duchess of Cambridge, and Prince Harry and Meghan have attended a service of thanksgiving for the Queen to celebrate...",
        "url": "https://www.youtube.com/watch?v=98etDOXPVAA",
        "urlToImage": "https://i.ytimg.com/vi/98etDOXPVAA/hqdefault.jpg",
        "publishedAt": "2022-06-03T11:41:24Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Des Moines Register"
        },
        "author": "Des Moines Register and Ames Tribune  staff, Des Moines Register",
        "title": "Shooting at Ames, Iowa, church kills 3, including the suspected gunman - Des Moines Register",
        "description": "The suspected shooter appeared to have died from a self-inflicted gunshot wound. The ages of his two female victims were not immediately known.",
        "url": "https://www.desmoinesregister.com/story/news/crime-and-courts/2022/06/03/ames-iowa-church-shooting-what-we-know-about-cornerstone-church-three-killed/7493989001/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2022/06/03/PDEM/22a27246-68a0-4c13-9c56-ceaf1e96fdb0-6-2_Cornerstone_church_shooting_12.jpg?auto=webp&crop=2999,1687,x0,y34&format=pjpg&width=1200",
        "publishedAt": "2022-06-03T11:30:27Z",
        "content": "A man shot and killed two female victims, then killed himself, in a parking lot outside Ames' Cornerstone Church Thursday night, according to police and officials at the church.\r\nThe suspected shoote… [+4084 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SciTechDaily"
        },
        "author": null,
        "title": "NASA Priority Artemis Science on Moon To Investigate Mysterious Gruithuisen Domes - SciTechDaily",
        "description": "NASA has major plans for moon exploration under the Artemis Program. While one of the chief goals is to send astronauts to establish the first long-term presence on the Moon and learn what is necessary to send the first astronauts to Mars, there are also many…",
        "url": "https://scitechdaily.com/nasa-priority-artemis-science-on-moon-to-investigate-mysterious-gruithuisen-domes/",
        "urlToImage": "https://scitechdaily.com/images/NASA-Gruithuisen-Domes-Moon.jpg",
        "publishedAt": "2022-06-03T10:57:00Z",
        "content": "ByNASAJune 3, 2022\r\nNASA is planning to send a lander and rover to the beautiful Gruithuisen Domes, as seen in this controlled mosaic, and LROC images will help guide the way. The domes are located a… [+7185 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Texas school shooting: Uvalde police chief wasn't aware of 911 calls, senator says - WFAA",
        "description": null,
        "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DN2xcXMQQOao",
        "urlToImage": null,
        "publishedAt": "2022-06-03T10:54:07Z",
        "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more"
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Samantha Lock, Léonie Chao-Fong, Maya Yang, Martin Belam",
        "title": "Russia-Ukraine war: what we know on day 100 of the invasion - The Guardian",
        "description": "Russian forces now occupy about 20% of Ukraine’s territory as Zelenskiy notes ‘some success’ in battles at Sievierodonetsk",
        "url": "https://amp.theguardian.com/world/2022/jun/03/russia-ukraine-war-what-we-know-on-day-100-of-the-invasion",
        "urlToImage": "https://i.guim.co.uk/img/media/76d62bc18a0ea94f03ad33ac78e868f05fb2ba38/0_14_7360_4418/master/7360.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c737a042d8893a5e069009b1400f9269",
        "publishedAt": "2022-06-03T10:12:00Z",
        "content": "About 60% of the infrastructure and residential buildings in Lysychansk, one of only two cities in the east still under at least partial Ukrainian control, have been destroyed from attacks, according… [+179 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Space.com"
        },
        "author": "Elizabeth Howell",
        "title": "Jupiter is a whirling world in stunning (and woozy) footage from Juno spacecraft - Space.com",
        "description": "The spacecraft passed within 2,050 miles (3,300 kilometers) of the colorful cloud tops on April 9.",
        "url": "https://www.space.com/jupiter-whirling-world-juno-spacecraft-images",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/Hu4KQBWaxrf83fe5PurkVf-1200-80.jpg",
        "publishedAt": "2022-06-03T10:00:39Z",
        "content": "This animation shows the Juno spacecraft's perspective of Jupiter during a flyby on April 9, 2022. (Image credit: Image data: NASA/JPL-Caltech/SwRI/MSSS Image processing by AndreaLuck © CC BY­­)\r\nHan… [+3043 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Victoria Song",
        "title": "Behind the high-tech COVID-19 tests you probably haven't heard about - The Verge",
        "description": "While most people are familiar with rapid at-home antigen tests, Cue Health, Detect, and Lucira Health all have FDA-authorized OTC molecular tests that combine PCR accuracy with the convenience of at-home antigen tests.",
        "url": "https://www.theverge.com/2022/6/3/23141813/molecular-covid-19-test-otc-pcr-fda",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/AGXXmLum0EdQI7B_zNEZMheJFAo=/0x292:2040x1360/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23593159/vsong_220419_5249_0013.jpg",
        "publishedAt": "2022-06-03T10:00:00Z",
        "content": "If you  buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.When you think about getting tested for COVID-19, youre most likely picturing two types of tests: the… [+19985 chars]"
    }
]

static defaultProps={
    country:'in',
    pageSize: 8,
    category:'general',
}
static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number


}
 capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()  + string.slice(1);

}
constructor(){
  super();
  console.log("hello I am a constructor has components");
  this.state={
    articles:this.articles,
    loading :true
  }
    
}
 
async updatenews(){

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bda46144bc304b5fb723b08c71c43fd2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true});
   let data=await fetch(url);
  
   let parsedData=await data.json()
   console.log(parsedData);  
   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
   loading:false})

}

async componentDidMount(){ 
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bda46144bc304b5fb723b08c71c43fd2&page=1&pageSize=${this.props.pageSize}`;
   this.setState({loading:true});
   let data=await fetch(url);
  
   let parsedData=await data.json()
   console.log(parsedData);  
   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
   loading:false})

 }
handlePervClick= async()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bda46144bc304b5fb723b08c71c43fd2&page=${this.state.page -1}&pageSize=$
    // (this.props.pagesize)`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    
    // let parsedData=await data.json()
    // console.log(parsedData); 
    
    // this.setState({
    //     page:this.state.page -1,
    //     articles:parsedData.articles,
    //     loading:false
    
   // })

    this.setState({page:this.state.page-1});
    this.updatenews();

}



handleNextClick=async()=>{
    // console.log("hello next");
    // if(!this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bda46144bc304b5fb723b08c71c43fd2&page=${this.state.page + 1}&pageSize=$
    // (this.props.pagesize)`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json()
    // console.log(parsedData); 
    
    // this.setState({
    //     page:this.state.page +1,
    //     articles:parsedData.articles,
    //     loading:false
    // })
//}
    this.setState({page:this.state.page+1});
    this.updatenews();
    }



render() {
    return (
      <div className="container my-3">
          <h1 className="text-center " style={{margin:'60px 0px',marginTop:'90px'}}>News-Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return  <div className="col-md-3" key ={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""}  description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage}
              newsUrl={element.url}  author={element.author} date={element.publishedAt}/>
            </div>
  })}
          
  </div>
  <div className="container d-flex justify-content-between">
    <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePervClick}>&larr; Pervious</button>
    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
  </div>
      </div>
    )
  }
}

export default News