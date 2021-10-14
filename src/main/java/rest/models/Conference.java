package rest.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Entity
@NoArgsConstructor

public class Conference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull(message = "Missing name")
    private String name;
    @NotNull(message = "Missing amount")
    private Integer amount;
    @NotNull(message = "Missing price")
    private float price;

    public Conference(String name, Integer amount, float price) {
        this.name = name;
        this.amount = amount;
        this.price = price;
    }

}
