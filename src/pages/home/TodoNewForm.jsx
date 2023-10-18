import "../../App.css"

export function TodoNewForm() {

  return (
    <form className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">Novo Item</label>
                <input
                    id="item"
                    type="text"
                />
            </div>
            <button className="btn">+</button>
      </form>
  );
}

