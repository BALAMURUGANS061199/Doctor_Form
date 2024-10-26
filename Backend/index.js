import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();

// MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "root",
  password: "ROOT",
  database: "patients_data",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error Connecting to Database:", err);
    return;
  }
  console.log("Connected to MySQL Database");
});

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// POST route for inserting a patient
app.post("/add-patient", (req, res) => {
  const {
    order_wise_date,
    dob,
    height,
    weight,
    sex,
    symptomatic,
    ethnicity,
    replacement_operation_date,
    surgeon_name,
    knee_replacement,
    functional_classification,
    anatomic_alignment,
    measured_in_full_extension,
    measured_at_90_degrees,
    range_of_motion,
    flexion_contracture,
    extensor_lag,
    pain_with_level_walking,
    pain_with_stairs_or_inclines,
    knee_feel,
    satisfied_pain_level,
    satisfied_knee_while_lying,
    satisfied_knee_function_getting_out_of_bed,
    satisfied_knee_function_light_household_duties,
    satisfied_recreational_activities,
    knee_pain,
    normal_activities,
    recreational_or_sports_activities,
    without_aids,
    following_aids,
    use_these_aids,
    knee_discomfort,
    before_stopping_due_to_knee_discomfort,
    uneven_surface,
    pivoting,
    climbing_up,
    without_arms,
    out_of_car,
    moving_laterally,
    stool,
    bag_for_a_block,
    squatting,
    kneeling,
    running,
    knee_activities,
    activity1,
    activity2,
    activity3,
  } = req.body;

  // SQL query for inserting data
  const query = `
    INSERT INTO patients (
      order_wise_date, dob, height, weight, sex, symptomatic, ethnicity, replacement_operation_date,
      surgeon_name, knee_replacement, functional_classification, anatomic_alignment, measured_in_full_extension,
      measured_at_90_degrees, range_of_motion, flexion_contracture, extensor_lag, pain_with_level_walking,
      pain_with_stairs_or_inclines, knee_feel, satisfied_pain_level, satisfied_knee_while_lying,
      satisfied_knee_function_getting_out_of_bed, satisfied_knee_function_light_household_duties, 
      satisfied_recreational_activities, knee_pain, normal_activities, recreational_or_sports_activities, 
      without_aids, following_aids, use_these_aids, knee_discomfort, before_stopping_due_to_knee_discomfort,
      uneven_surface, pivoting, climbing_up, without_arms, out_of_car, moving_laterally, stool, 
      bag_for_a_block, squatting, kneeling, running, knee_activities, activity1, activity2, activity3
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    order_wise_date,
    dob,
    height,
    weight,
    sex,
    symptomatic,
    ethnicity,
    replacement_operation_date,
    surgeon_name,
    knee_replacement,
    functional_classification,
    anatomic_alignment,
    measured_in_full_extension,
    measured_at_90_degrees,
    range_of_motion,
    flexion_contracture,
    extensor_lag,
    pain_with_level_walking,
    pain_with_stairs_or_inclines,
    knee_feel,
    satisfied_pain_level,
    satisfied_knee_while_lying,
    satisfied_knee_function_getting_out_of_bed,
    satisfied_knee_function_light_household_duties,
    satisfied_recreational_activities,
    knee_pain,
    normal_activities,
    recreational_or_sports_activities,
    without_aids,
    following_aids,
    use_these_aids,
    knee_discomfort,
    before_stopping_due_to_knee_discomfort,
    uneven_surface,
    pivoting,
    climbing_up,
    without_arms,
    out_of_car,
    moving_laterally,
    stool,
    bag_for_a_block,
    squatting,
    kneeling,
    running,
    knee_activities,
    activity1,
    activity2,
    activity3,
  ];

  // Execute the query
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "Failed to insert data" });
    } else {
      res.status(200).json({
        message: "Patient Datas inserted successfully",
        patientId: result.insertId,
      });
    }
  });
});

app.get("/get-patients", (req, res) => {
  const query1 = "Select * from patients";
  db.query(query1, (err, list) => {
    if (err) {
      console.log(err);
    }
    return res.status(200).json({ message: "Patients List", list });
  });
});
// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
