import React from 'react'
import { Grid } from 'semantic-ui-react'

const Frc = () => {
    return (
        <Grid columns='equal' stretched>
            <Grid.Column>
                <iframe
                    title="FaceReCognization"
                    type="text/html" 
                    src="https://amazing-face-detection-fe.herokuapp.com/" 
                    frameBorder="0" 
                    allowFullScreen=""
                    height="450">
                </iframe>
            </Grid.Column>
        </Grid>
        
    )
}

export default Frc