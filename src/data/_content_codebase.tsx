// debug this might need some fixes too later on.
export const CodeBase: string[] = [
  `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`,
  `'use client';
import React from 'react';
import { IconCheck } from '@tabler/icons-react';

type Props = {
  label?: string;
};

const CheckButton: React.FC<Props> = ({ label = 'Confirm' }) => {
  const [checked, setChecked] = React.useState(false);

  const toggleCheck = () => {
    setChecked(prev => !prev);
  };

  return (
    <button
      onClick={toggleCheck}
      className={\`flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-all duration-300
        \${
          checked
            ? 'border-green-500 bg-green-100 text-green-700 hover:bg-green-200'
            : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-100'
        }\`}
      aria-pressed={checked}>
      <span>{label}</span>
      {checked && (
        <IconCheck
          className='text-green-600 transition-opacity duration-300'
          size={16}
        />
      )}
    </button>
  );
};

export default CheckButton;
`,
  `
<?php
$conn = null;
$conn = checkDbConnection();
$hero = new Hero($conn);
if (array_key_exists("heroid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$hero->hero_title = checkIndex($data, "hero_title");
$hero->hero_description = checkIndex($data, "hero_description");
$hero->hero_context = checkIndex($data, "hero_context");
$hero->hero_image = checkIndex($data, "hero_image");
$hero->hero_is_active = 1;
$hero->hero_created = date("Y");
$hero->hero_published_date = date("Y-m-d H:i:s");
$hero->hero_datetime = date("Y-m-d H:i:s");

// isNameExist($hero, $hero->hero_name);

$query = checkCreate($hero);
returnSuccess($hero," hero", $query);
`,
  `def runthis():
    err = ""
    err = mysql.connector.Error
    try:
        # Initialize the database connection
        cursor = db.cursor()
        # SQL to create the table if it doesn't exist
        createTable = """
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100)
        );
        """
        # SQL to insert records into the users table
        createEntries = """INSERT INTO users (name, email)
        VALUES ('fullstack', 'fullstack@gmail.com'), ('frontend', 'frontend@gmail.com'), ('backend', 'backend@gmail.com');"""
        # Try to select from the users table to check if it exists
        cursor.execute("SELECT 1 FROM users LIMIT 1;")
        # If the table exists, this statement will succeed, and we can insert entries
        print("Table 'users' exists. Inserting entries.")
        # If the table doesn't exist, the SELECT query will raise an error
        if (err == mysql.connector.errorcode.ER_NO_SUCH_TABLE):
            # Table doesn't exist, create it
            print("Table 'users' doesn't exist. Creating table.")
            cursor.execute(createTable)
            cursor.execute(createEntries)
        # Insert entries after creating the table
        else:
            # If the error is not about the table missing, raise the error
            print("Table 'users' exist. Check if Entries are Added.")
            cursor.execute(createEntries)
    except mysql.connector.Error as err:
        print(f"Error: {err}")
runthis()`,
  `<?php get_header(); ?>

<main id="main" class="site-main">
  <?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <h2 class="entry-title">
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h2>
        <div class="entry-content">
          <?php the_excerpt(); ?>
        </div>
      </article>
    <?php endwhile; ?>

    <?php the_posts_navigation(); ?>

  <?php else : ?>
    <p>No posts found.</p>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
`,
];
