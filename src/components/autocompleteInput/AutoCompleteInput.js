import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { data } from '../../data/Data';

export default function AutoCompleteInput({setVal, showDetail}) {
  return (
    <Stack spacing={3} sx={{ minWidth:300, maxWidth:450, marginTop:'10px' }}>
      <Autocomplete
        disabled={showDetail ? true : false}
        multiple
        id="tags-standard"
        onChange={(event, value) => setVal(value)}
        options={data}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="State"
            placeholder="State"
          />
        )}
      />
    </Stack>
  );
}

