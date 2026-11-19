CREATE TABLE IF NOT EXISTS tasks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  reward_rwf INTEGER NOT NULL DEFAULT 0 CHECK (reward_rwf >= 0),
  category VARCHAR(60) NOT NULL DEFAULT 'Amahirwe',
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO tasks (title, description, reward_rwf, category)
SELECT 'Uzuza ubushakashatsi bugufi', 'Tanga igitekerezo cyawe ku bicuruzwa na serivisi.', 500, 'Ubushakashatsi'
WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE title = 'Uzuza ubushakashatsi bugufi');

INSERT INTO tasks (title, description, reward_rwf, category)
SELECT 'Ongera ubumenyi bwawe', 'Tangira amasomo magufi agufasha kwitegura akazi.', 0, 'Kwiga'
WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE title = 'Ongera ubumenyi bwawe');

INSERT INTO tasks (title, description, reward_rwf, category)
SELECT 'Shyira serivisi yawe ku rubuga', 'Erekana ibyo ushoboye kandi ugere ku bakiriya bashya.', 0, 'Serivisi'
WHERE NOT EXISTS (SELECT 1 FROM tasks WHERE title = 'Shyira serivisi yawe ku rubuga');
