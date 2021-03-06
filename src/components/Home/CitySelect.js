import React, {useEffect, useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Button, InputLabel, MenuItem, FormControl, Select, InputBase} from '@material-ui/core';
import {Link} from "react-router-dom"

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));


function CitySelect({locations}) {
    const classes = useStyles()
    const [city, setCity] = useState('')
    const [selectcity, setselectcity] = useState('')
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        window.addEventListener("keypress", handleKeyPress)
        return () => {
            window.removeEventListener("keypress", handleKeyPress)
        }
    }, [keyword])

    const onselectcity = (event, type) => {
        console.log(event.target)
        setCity(event.target.value);
        setselectcity(type.props.children)
    };
    const handleKeyPress = e => {
        console.log(e.key)
    }
    const onChangeKeyword = e => {
        setKeyword(e.target.value)
    }
    const getData = async () => {
        if (!selectcity) {
            alert('????????? ??????????????????')
            window.location.replace("/")
        } else if (!keyword) {
            alert('???????????? ??????????????????')
            window.location.replace("/")
        } else {
            console.log(selectcity, keyword)
        }
    }

    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel id="demo-customized-select-label">City</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={city}
                    onChange={onselectcity}
                    input={<BootstrapInput/>}
                >
                    <MenuItem value={0}>
                        <strong>??????</strong>
                    </MenuItem>
                    {locations.map(item => (
                        <MenuItem value={item.code}>{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.margin} onChange={onChangeKeyword}>
                <InputLabel htmlFor="demo-customized-textbox">
                    keyword
                </InputLabel>
                <BootstrapInput id="demo-customized-textbox"/>
            </FormControl>
            <FormControl className={classes.margin}>
                <Link
                    style={{textDecoration: 'none'}}
                    to={{
                        pathname: `/keyword/${keyword}`,
                        state: {
                            selectcity, keyword, city
                        }
                    }
                    }>
                    <Button
                        style={{marginTop: 26}}
                        selectcity={selectcity}
                        keyword={keyword}
                        onClick={getData}
                    >
                        ??????
                    </Button>
                </Link>
            </FormControl>

        </div>
    );
}

export default CitySelect;