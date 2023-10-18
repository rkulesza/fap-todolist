import "../../App.css"

export function TodoNewForm() {

  return (
    <form className="new-item-form">
            <div className="form-row">
                <label>Novo Item</label>
                <input
                    id="item"
                    type="text"
                />
            </div>
            <button className="btn">+</button>
      </form>
  );
}

