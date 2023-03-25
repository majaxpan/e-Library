package mk.ukim.finki.emt.eshop.model.exceptions;

public class CountryNotFoundException extends RuntimeException {

    public CountryNotFoundException(Long id) {
        super(String.format("Country with id: %d not found", id));
    }
}
