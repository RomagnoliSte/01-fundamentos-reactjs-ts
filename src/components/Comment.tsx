import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [LikeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {        
        onDeleteComment(content);  
    }

    function handleLikeComment(){
        setLikeCount(LikeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/RomagnoliSte.png"/> 

            <div className={styles.commentBox}>
                <div className={styles.commentContent}> 
                    <header>
                        <div className={styles.authorAndTime}> 
                            <strong> Diego Fernandes</strong>
                            <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30"> Cerca de 1h atrás </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário"> 
                            <Trash size={24} />
                        </button>
                        
                    </header>   

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span> {LikeCount} </span>
                    </button>
                </footer>

            </div>
        </div>

    )
}

