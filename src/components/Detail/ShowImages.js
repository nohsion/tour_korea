import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

function ShowImages({images}) {
    const classes = useStyles();
    // console.log(images)

    if (Array.isArray(images)) {
        console.log("images 배열입니다")
    }
    else if (images) {
        console.log("image data는 있는데 배열이 아니네요")
        let new_images = []
        new_images.push(images)
        images = new_images
    }
    else {
        console.log("image data가 없습니다")
        images = []
    }

    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={1.5} rowHeight={250}>
                {images.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.originimgurl} alt={item.serialnum}/>
                        <ImageListItemBar
                            title={item.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${item.title}`}>
                                    <StarBorderIcon className={classes.title}/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );

}

export default ShowImages