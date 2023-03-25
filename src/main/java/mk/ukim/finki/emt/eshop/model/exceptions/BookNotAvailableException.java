package mk.ukim.finki.emt.eshop.model.exceptions;

public class BookNotAvailableException extends RuntimeException{

    public BookNotAvailableException(Long id) {
        super(String.format("Book with id: %d is not available!", id));
    }
}
