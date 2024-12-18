import BestBookButton from './BestBookButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';

export default function BestBook({bookList}) {
    
    return (
        <>
            { 
                bookList && bookList.map( (book, index) => 
                    <div style={{display:"flex"}}>
                        <BestBookAvatar rank={index+1} img={book.img} />
                        <BestBookContent 
                            suggest={book.suggest} 
                            today={book.today} 
                            type={book.type} 
                            title={book.title} 
                            author={book.author} 
                            company={book.company}  
                            price={book.price} 
                            perSale={book.perSale}
                            point={book.point} 
                        />
                        <BestBookButton />
                    </div>
                ) 
            }
        </>
    );
}

