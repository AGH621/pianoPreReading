/*
Accordian Component
Created by: Anne Hamill
Created on: 25 August 2022
Version: 3.0
Description: An MUI Accordian component which will be populated by text for teachers and parents.
*/

//External imports
import { Box,
         Paper,
         Typography,
         Grid,
         Accordion,
         AccordionSummary,
         AccordionDetails,
         ThemeProvider} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Interal imports
import {readText} from '../js/read_text';
import { theme } from '../siteTheme.js';


export default function appAccordian(tchText, stuText, the_page) {
/*
    Accordian component used on the home and unit pages.
*/
    function backGround(a_page) {
        /*
            Make the accordian background color the same as the page's.
            TODO: Repeated in other places, make it spin-off and import.
        */
        switch(a_page) {
            case 'three_note':
                return {backgroundColor: "backgrounds.threeNote", border: 1}
                break;
            case 'four_note':
                return {backgroundColor: "backgrounds.fourNote", border: 1}
                break;
            case 'five_finger':
                return {backgroundColor: "backgrounds.fiveFinger", border: 1}
                break;
            case 'pentatonic':
                return {backgroundColor: "backgrounds.pentatonic", border: 1}
                break;
            case 'diatonic':
                return {backgroundColor: "backgrounds.diatonic", border: 1}
                break;
            case 'minor':
                return {backgroundColor: "backgrounds.minor", border: 1}
                break;
            default:
                return {backgroundColor: "backgrounds.nav", border: 1}
                break;
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{paddingLeft: "6em",
                      paddingRight: "6em",
                      paddingTop: "2em" }}>
                <Accordion sx={backGround(the_page)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header">
                        <Typography variant="h3" color="primary.dark">For Teachers</Typography>
                    </AccordionSummary>
            
                    <AccordionDetails>
                        <Typography variant="body1">
                            {tchText}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
                        
            <Box sx={{paddingLeft: "6em",
                      paddingRight: "6em",
                      paddingTop: "2em" }}>
                <Accordion sx={backGround(the_page)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                
                        <Typography variant="h3" color="primary.dark">For Parents</Typography>
                    </AccordionSummary>
                
                    <AccordionDetails>
                        <Typography variant="body1">
                            {stuText}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </ThemeProvider>                               
    );
}