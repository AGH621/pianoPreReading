
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';

import { allTitles } from "../js/sort_ped_type"; 


function addTitles() {
    let score_types = []
        
    let the_scores = allTitles()
    for (let x=0; x<the_scores.length; x++) {
        score_types.push(the_scores[x])
    }
    return score_types
}

export default function FreeSolo() {
    let our_scores = addTitles()
    
    function handleInputChange(event, value) {
        console.log(value);
      }
  
  return (
      <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={our_scores.map((option) => option)}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
        
    </Stack>
  );
}


/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'

export default function Posts() {
    const [APIData, setAPIData] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {APIData.map((item) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Card.Header>{item.name}</Card.Header>
                                <Card.Description>
                                    {item.email}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        </div>
    )
}*/




    


