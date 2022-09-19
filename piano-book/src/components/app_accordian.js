import { Typography,
         Grid,
         Accordion,
         AccordionSummary,
         AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {readText} from '../js/read_text';



export default function appAccordian(tchText, stuText) {
    return (
        <div style={{padding: "5rem" }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                <Typography variant="h2">For Teachers</Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                <Typography variant="body1">
                    {tchText}
                </Typography>
                </AccordionDetails>
            </Accordion>
                    
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    
                    <Typography variant="h2">For Parents</Typography>
                </AccordionSummary>
                    
                <AccordionDetails>
                    
                    {stuText}
                   
                </AccordionDetails>
            </Accordion>
        </div>
    );
}