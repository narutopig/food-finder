import styles from "@/app/page.module.css";
import Navbar from "@/components/navbar";
import { Dispatch, SetStateAction, useState } from "react";

function Goals() {
  const properties = [
    "nf_calories",
    "nf_saturated_fat",
    "nf_cholesterol",
    "nf_sodium",
    "nf_total_carbohydrate",
    "nf_dietary_fiber",
    "nf_sugars",
    "nf_protein"
  ];

  const [calories, setCalories] = useState("");
  const [satFat, setSatFat] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [fibers, setFibers] = useState("");
  const [carbs, setCarbs] = useState("");
  const [sugars, setSugars] = useState("");
  const [protein, setProtein] = useState("");

  const handleChange = (e: any, setState: Dispatch<SetStateAction<string>>) => {
    const value = e.target.value;
    const nums = "1234567890";
    if (nums.includes(value.charAt(value.length - 1))) {
      setState(e);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h2>Nutrition Goals</h2>
      <form>
        <label>
          Calories:{" "}
          <input
            type="text"
            value={calories}
            onChange={(e) => handleChange(e, setCalories)}
          />
        </label>
        <br />
        <label>
          Saturated Fat:{" "}
          <input
            type="text"
            value={satFat}
            onChange={(e) => handleChange(e, setSatFat)}
          />
        </label>
        <br />
        <label>
          Cholesterol:{" "}
          <input
            type="text"
            value={cholesterol}
            onChange={(e) => handleChange(e, setCholesterol)}
          />
        </label>
        <br />
        <label>
          Fibers:{" "}
          <input
            type="text"
            value={fibers}
            onChange={(e) => handleChange(e, setFibers)}
          />
        </label>
        <br />
        <label>
          Cholesterol:{" "}
          <input
            type="text"
            value={cholesterol}
            onChange={(e) => handleChange(e, setCholesterol)}
          />
        </label>
        <br />
        <label>
          Carbs:{" "}
          <input
            type="text"
            value={carbs}
            onChange={(e) => handleChange(e, setCarbs)}
          />
        </label>
        <br />
        <label>
          Sugars:{" "}
          <input
            type="text"
            value={sugars}
            onChange={(e) => handleChange(e, setSugars)}
          />
        </label>
        <br />
        <label>Protein: </label>
        <input
          type="text"
          value={protein}
          onChange={(e) => handleChange(e, setProtein)}
        />
      </form>
    </div>
  );
}

export default Goals;
