import * as React from 'react';
import { ImageSlider } from '../../components'
import MuiImageSlider from 'mui-image-slider';
import { Box, Container, Typography } from '@mui/material';
import { IImages } from "../../types"

const CardImage: React.FC<IImages>= ({
  url,
  title,
}) => {

  
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ 
          mt: 7, 
          mb: 5, 
          pr: 5, 
          pl: 5,
          boxSizing: 'border-box',
          '@media (max-width:400px)': {
            mt: 8, 
            mb: 4, 
            pr: 0, 
            pl: 0,
          }, 
        }}>
             <ImageSlider images={url!}/>
             {/* <MuiImageSlider images={url!}/> */}
             <Typography
                align="center"
                sx={{ mt: 3 }}
             >
                {title}
             </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default CardImage