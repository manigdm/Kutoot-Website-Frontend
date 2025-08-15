const Loading = () => {
    return (
        <div className="container">
            <div style={{
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: '20%'
            }}>
                <div>
                    <img src="/images/campaign/campaign-loading.svg" alt="loading.." style={{
                    width: '300px'
                }}/>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        fontWeight: '700',
                        fontStyle: 'Bold',
                        fontSize: '20px',
                        width: '265px',                    
                    }}>Page loading..</div>
                    <div style={{
                        fontWeight: '700',
                        fontStyle: 'Bold',
                        fontSize: '28px',
                        width: '265px',                       
                    }}>Loading content, please wait!</div>
                </div>
            </div>
        </div>
    )
}
export default Loading