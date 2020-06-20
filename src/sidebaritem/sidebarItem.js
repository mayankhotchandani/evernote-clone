import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';
import { List } from '@material-ui/core';

class SidebarItemComponent extends React.Component {
    render(){
        const{_index,_notes,classes,selectedNoteIndex}=this.props;
        return(
         <div key={_index}>
           <ListItem
           className={classes.listItem}
           selected={selectedNoteIndex===_index}
           alignItems='flex-start'>
             <div className={classes.textSection}
             onClick={()=>this.selectNote(_notes,_index)}>
                 <ListItemText
                 primary={_notes.title}
                 secondary={removeHTMLTags(_notes.body.substring(0,30))+'......'}>

                 </ListItemText>
             </div>
             <DeleteIcon
             onClick={()=>this.deleteNote(_notes)}
             className={classes.deleteIcon}></DeleteIcon>
           </ListItem>
        </div>
        )
    }
    selectNote=(n,i)=>{
        this.props.selectNote(n,i);
    }
    deleteNote=(note)=>{
     if(window.confirm(`Are you sure you want to delete: ${note.title}`)){
         this.props.deleteNote(note);
     }
    }
}
export default withStyles(styles)(SidebarItemComponent)


// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import styles from './styles';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { removeHTMLTags } from '../helpers';

// class SidebarItemComponent extends React.Component {

//   render() {

//     const { _index, _notes, classes, selectedNoteIndex } = this.props;

//     return(
//       <div key={_index}>
//         <ListItem
//           className={classes.listItem}
//           selected={selectedNoteIndex === _index}
//           alignItems='flex-start'>
//             <div 
//               className={classes.textSection}
//               onClick={() => this.selectNote(_notes, _index)}>
//                 <ListItemText
//                   primary={_notes.title}
//                   secondary={removeHTMLTags(_notes.body.substring(0, 30)) + '...'}></ListItemText>
//             </div>
//             <DeleteIcon onClick={() => this.deleteNote(_notes)}
//               className={classes.deleteIcon}></DeleteIcon>
//         </ListItem>
//       </div>
//     );
//   }
//   selectNote = (n, i) => this.props.selectNote(n, i);
//   deleteNote = (note) => {
//     if(window.confirm(`Are you sure you want to delete: ${note.title}`)) {
//       this.props.deleteNote(note);
//     }
//   }

// }

// export default withStyles(styles)(SidebarItemComponent);
