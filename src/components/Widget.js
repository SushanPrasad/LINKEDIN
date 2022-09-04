import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import "./Widget.css";

function Widget() {
    const newsArticle = (heading, subtitle) => (
       
       <div className='art'>
       
      <div className="artleft">
                    <FiberManualRecordIcon />
     </div>
     
     <div className='artright' >
  
                <h4> {heading}</h4>
                <p> {subtitle} </p>
  
      </div>
             </div>
                                            ) ;   


  return (

    <div className='widget'>
    <div className='wid_head'>
        <h2> LinkedIn News</h2>
        <InfoIcon />
    </div>
    
    {newsArticle ("President of India 2022: The president is the nominal head of the executive, the first citizen of the country, as well as the commander-in-chief of the Indian Armed Forces. Droupadi Murmu is the 15th and current president, having taken office in the forenoon of 25 July 2022"
      )}
    {newsArticle ("Ukraine says scores of Russians killed in kherson fighting.  Relations between the two countries became hostile after the 2014 Ukrainian revolution, which was followed by Russia's annexation of Crimea from Ukraine, and due to Russia's backing for the separatist fighters of the Donetsk People's Republic and the Luhansk People's Republic in a war, conflicts that had killed more.")}
    {newsArticle ("Tamil Nadu Chief Minister M.K. Stalin tested positive for COVID-19 on Tuesday and has isolated himself.In a social media post, Mr. Stalin said he felt tired on Tuesday and hence tested himself. He tested positive for COVID-19.Mr. Stalin reiterated his request calling upon people to use face masks in public places and to take COVID vaccination")}
    {newsArticle ("Joe Biden has tested positive for Covid-19 for a second time and is returning to isolation, his White House doctor said Saturday, attributing the result to rebound positivity from treatment the US president received")}
    {newsArticle (" Webb is currently at its observing spot, Lagrange point 2 (L2), nearly 1 million miles (1.6 million km). It is the largest and most powerful space telescope ever launched.")}
    {newsArticle ("Sri Lanka authorises its soldiers to use 'necessary' force to stop destruction of life and property.The crisis is said to have begun due to multiple compounding factors like tax cuts, money creation, a nationwide policy to shift to organic or biological farming, the 2019 Sri Lanka Easter bombings, and the impact of the COVID-19 pandemic in Sri Lanka")}

    </div>
  )
}

export default Widget
