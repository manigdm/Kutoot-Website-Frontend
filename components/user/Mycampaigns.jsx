"use client";
import React, { useState } from 'react';
const Mycampaigns = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  
  // Campaign card style object
  const campaignCardStyle = {
    borderRadius: '14px',
    border: '0.7px solid #CDCDCD',
    background: '#FFF',
    boxShadow: '0 0 6px 0 rgba(155, 155, 155, 0.25)',
    display: 'flex',
    height: '148px',
    padding: '12px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '12px',
    alignSelf: 'stretch',
    position: 'relative' // Added for absolute positioning of date element
  };
  
  // Ongoing button style
  const ongoingButtonStyle = {
    borderRadius: '12px',
    background: '#469F00',
    display: 'flex',
    width: '70px',
    padding: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12px',
    letterSpacing: '-0.12px'
  };
  
  // Completed button style
  const completedButtonStyle = {
    borderRadius: '12px',
    background: '#EA6B1E',
    display: 'flex',
    width: '70px',
    padding: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12px',
    letterSpacing: '-0.12px'
  };
  
  // Title style
  const titleStyle = {
    color: '#3B322B',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '20px'
  };
  
  // Description style
  const descriptionStyle = {
    color: '#3B322B',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14px',
    display: 'flex',
    flexWrap: 'wrap'
  };
  
  // Text part before break
  const beforeBreakStyle = {
    ...descriptionStyle,
    marginRight: '6px'
  };
  
  // Text part after break
  const afterBreakStyle = {
    ...descriptionStyle,
    width: '100%'
  };
  
  // New element style
  const newElementStyle = {
    borderRadius: '40.65px',
    background: '#FFC8A7',
    backdropFilter: 'blur(10.643649101257324px)',
    display: 'flex',
    width: '200px',
    height: '21px',
    padding: '12px',
    alignItems: 'center',
    gap: '6px'
  };
  
  // Text style for number and pipe
  const textStyle = {
    color: '#3B322B',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '18px',
    letterSpacing: '-0.28px'
  };
  
  // Percentage text style
  const percentageTextStyle = {
    color: '#3B322B',
    fontFamily: '"Zurich Extra Black", sans-serif',
    fontSize: '12.8px',
    fontStyle: 'normal',
    fontWeight: 900,
    lineHeight: '14.4px',
    letterSpacing: '-0.256px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };
  
  // Date container style
  const dateContainerStyle = {
    borderRadius: '6px',
    background: '#EDEDED',
    display: 'flex',
    padding: '6px',
    alignItems: 'center',
    gap: '9px',
    position: 'absolute',
    top: '12px',
    right: '12px'
  };
  
  // Entered date style
  const enteredDateStyle = {
    color: '#3A3A3A',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12px',
    letterSpacing: '-0.12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  };
  
  // Separator style
  const separatorStyle = {
    width: '1px',
    height: '14px',
    background: '#3B322B'
  };
  
  // Ends date style
  const endsDateStyle = {
    color: '#D90105',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '12px',
    letterSpacing: '-0.12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  };
  
  // Image style
  const imageStyle = {
    width: '234px',
    height: '84px',
    aspectRatio: '39/14',
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    objectFit: 'cover',
    borderRadius: '6px'
  };
  
  // Completed date container style
  const completedDateContainerStyle = {
    borderRadius: '6px',
    background: '#EDEDED',
    display: 'flex',
    padding: '6px',
    alignItems: 'center',
    gap: '4px',
    position: 'absolute',
    top: '12px',
    right: '12px'
  };
  
  // Completed ended date style
  const completedEndedDateStyle = {
    color: '#3A3A3A',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '12px',
    letterSpacing: '-0.12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  };
  
  return (
    <div style={{
      borderRadius: '8px',
      background: '#FFF',
      boxShadow: '0 0 30px 2px rgba(59, 50, 43, 0.10)',
      overflow: 'hidden',
      padding: '10px',
    }}>
      <div style={{ display: 'flex', paddingBottom: '10px' }}>
        <div 
          onClick={() => setActiveTab('ongoing')}
          style={{
            padding: '15px 20px',
            cursor: 'pointer',
            color: activeTab === 'ongoing' ? '#3B322B' : '#7C7C7C',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: activeTab === 'ongoing' ? '700' : '300',
            lineHeight: '18px',
          }}
        >
          Ongoing (2)
        </div>
        <div 
          onClick={() => setActiveTab('completed')}
          style={{
            padding: '15px 20px',
            cursor: 'pointer',
            color: activeTab === 'completed' ? '#3B322B' : '#7C7C7C',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: activeTab === 'completed' ? '700' : '300',
            lineHeight: '18px',
          }}
        >
          Completed (2)
        </div>
      </div>
      
      <div style={{
        width: '798.98px',
        height: '1px',
        backgroundColor: '#E0E0E0'
      }}></div>
      
      <div style={{ padding: '20px' }}>
        {activeTab === 'ongoing' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={campaignCardStyle}>
              <div style={dateContainerStyle}>
                <div style={enteredDateStyle}>
                  <img src="/images/myprofile/calender.png" alt="calendar" style={{ width: '17px', height: '16px' }} />
                  Entered: 15.06.2025
                </div>
                <div style={separatorStyle}></div>
                <div style={endsDateStyle}>
                  <img src="/images/myprofile/timer.png" alt="timer" style={{ width: '17px', height: '16px' }} />
                  Ends: 25.06.2025
                </div>
              </div>
              <div style={ongoingButtonStyle}>Ongoing</div>
              <div style={titleStyle}>Buildiko Springwoods Designer Villa</div>
              <div style={descriptionStyle}>
                <span style={beforeBreakStyle}>Located in the heart of East Bengaluru's IT Corridor, near</span>
                <span style={afterBreakStyle}>WiproHQ, international schools, and malls</span>
              </div>
              <div style={newElementStyle}>
                <img src="/images/myprofile/coin.png" alt="coin" style={{ width: '13.763px', height: '13.988px', flexShrink: 0 }} />
                <span style={textStyle}>500</span>
                <span style={textStyle}>|</span>
                 <div style={percentageTextStyle}>
                  65%
                </div>
                 <img src="/images/myprofile/framee.png" alt="coin" style={{ width: '65px', height: '9px', flexShrink: 0 }} />
              </div>
              <img src="/images/myprofile/image.png" alt="building" style={imageStyle} />
            </div>
            <div style={campaignCardStyle}>
              <div style={dateContainerStyle}>
                <div style={enteredDateStyle}>
                  <img src="/images/myprofile/calender.png" alt="calendar" style={{ width: '17px', height: '16px' }} />
                  Entered: 15.06.2025
                </div>
                <div style={separatorStyle}></div>
                <div style={endsDateStyle}>
                  <img src="/images/myprofile/timer.png" alt="timer" style={{ width: '17px', height: '16px' }} />
                  Ends: 25.06.2025
                </div>
              </div>
              <div style={ongoingButtonStyle}>Ongoing</div>
              <div style={titleStyle}>Buildiko Springwoods Designer Villa</div>
              <div style={descriptionStyle}>
                <span style={beforeBreakStyle}>Located in the heart of East Bengaluru's IT Corridor, near</span>
                <span style={afterBreakStyle}>WiproHQ, international schools, and malls</span>
              </div>
              <div style={newElementStyle}>
                <img src="/images/myprofile/coin.png" alt="coin" style={{ width: '13.763px', height: '13.988px', flexShrink: 0 }} />
                <span style={textStyle}>500</span>
                <span style={textStyle}>|</span>
                <div style={percentageTextStyle}>
                  65%
                </div>
                 <img src="/images/myprofile/framee.png" alt="coin" style={{ width: '65px', height: '9px', flexShrink: 0 }} />
              </div>
              <img src="/images/myprofile/image.png" alt="building" style={imageStyle} />
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={campaignCardStyle}>
              <div style={completedDateContainerStyle}>
                <img src="/images/myprofile/timerr.png" alt="timer" style={{ width: '17px', height: '16px' }} />
                <div style={completedEndedDateStyle}>
                  Ended on: 25.06.2025
                </div>
              </div>
              <div style={completedButtonStyle}>Completed</div>
              <div style={titleStyle}>Buildiko Springwoods Designer Villa</div>
              <div style={descriptionStyle}>
                <span style={beforeBreakStyle}>Located in the heart of East Bengaluru's IT Corridor, near</span>
                <span style={afterBreakStyle}>WiproHQ, international schools, and malls</span>
              </div>
              <div style={newElementStyle}>
                <img src="/images/myprofile/coin.png" alt="coin" style={{ width: '13.763px', height: '13.988px', flexShrink: 0 }} />
                <span style={textStyle}>500</span>
                <span style={textStyle}>|</span>
                 <div style={percentageTextStyle}>
                  100%
                </div>
                 <img src="/images/myprofile/frameee.png" alt="coin" style={{ width: '65px', height: '9px', flexShrink: 0 }} />
              </div>
              <img src="/images/myprofile/image.png" alt="building" style={imageStyle} />
            </div>
            <div style={campaignCardStyle}>
              <div style={completedDateContainerStyle}>
                <img src="/images/myprofile/timerr.png" alt="timer" style={{ width: '17px', height: '16px' }} />
                <div style={completedEndedDateStyle}>
                  Ended on: 25.06.2025
                </div>
              </div>
              <div style={completedButtonStyle}>Completed</div>
              <div style={titleStyle}>Buildiko Springwoods Designer Villa</div>
              <div style={descriptionStyle}>
                <span style={beforeBreakStyle}>Located in the heart of East Bengaluru's IT Corridor, near</span>
                <span style={afterBreakStyle}>WiproHQ, international schools, and malls</span>
              </div>
              <div style={newElementStyle}>
                <img src="/images/myprofile/coin.png" alt="coin" style={{ width: '13.763px', height: '13.988px', flexShrink: 0 }} />
                <span style={textStyle}>500</span>
                <span style={textStyle}>|</span>
                 <div style={percentageTextStyle}>
                  100%
                </div>
                 <img src="/images/myprofile/frameee.png" alt="coin" style={{ width: '65px', height: '9px', flexShrink: 0 }} />
              </div>
              <img src="/images/myprofile/image.png" alt="building" style={imageStyle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Mycampaigns;

