import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 150,
  },
  resetButton: {
    margin: theme.spacing(1),
    marginLeft: 0,
    marginTop: theme.spacing(2),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "River",
  "Hiking",
  "Camping",
  "Adventure",
  "Animals",
  "Downtown",
  "Museum",
  "Vehicles",
  "Festivals",
  "Shows",
  "Lessons",
  "Other",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectsToolBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const updateField = (e) => {
    console.log(e.target.name, e.target.value);
    console.log(props.searchParams);
    setPersonName(e.target.value);
    props.setSearch({
      ...props.searchParams,
      [e.target.name]: e.target.value,
      wantSearch: true,
      conditionsWanted: {
        ...props.searchParams.conditionsWanted,
        [e.target.name]: e.target.value,
      },
    });
  };

  // const handleChangeMultiple = (event) => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   // setPersonName(value);
  // };

  return (
    <div>
      <form>
        <IconButton className={classes.resetButton} onClick={props.resetSearch}>
          <RefreshIcon />
        </IconButton>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Categories</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            name="categories"
            multiple
            onChange={updateField}
            value={props.searchParams.categories}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-number"
            label="Guests"
            name="guests"
            type="number"
            value={props.searchParams.guests}
            onChange={updateField}
            // InputLabelProps={{
            //   shrink: true,
            // }}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          {/* <InputLabel htmlFor="soutlined-adornment-amount">Amount</InputLabel> */}
          <TextField
            id="standard-number"
            label="Max Price"
            type="number"
            name="max_price"
            value={props.searchParams.max_price}
            onChange={updateField}
            InputProps={{
              endAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            // InputLabelProps={{
            //   shrink: true,
            // }}
          />
          {/* <Input
            id="standard-adornment-amount"
            label="Amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          /> */}
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="input-with-icon-adornment"
            label="Search"
            name="search"
            value={props.searchParams.search}
            onChange={updateField}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </form>
    </div>
  );
}
