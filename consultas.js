import pkg from 'pg'

const {Pool} = pkg

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    password : "v",
    database : "postgres",
    port : 5432
})

// export const getSkaters = () => {

// }

export const getSkaters = async () => {
    let client 
    const consulta = {
        name:"select-skaters",
        text:"SELECT * FROM skaters ORDER BY id ASC",
    }

    try {
        client = await pool.connect();
        const result = await client.query(consulta);
        return result.rows
    } catch (error) {
        return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
    }finally{
        if(client){
            client.release();
        }
    } 
}

// export const newSkater = (obj) => {
//     console.log('Salida de Obj-->', obj)
// }


export const newSkater  = async (skater) => {

    let client 
    const values = Object.values(skater);
    const consulta = {
        name:"insert-skater",
        text:"INSERT INTO skaters ( email, nombre, password, anos_experiencia, especialidad, foto, estado) values ($1,$2,$3,$4,$5,$6,false) RETURNING *",
        values
    }

    try {
        client = await pool.connect();
        const result = await client.query(consulta);
        return result
    } catch (error) {
        return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
    }finally{
        if(client){
            client.release();
        }
    } 
}
    
export const getSkater = async (email, password) => {
    let client; 
    try {
        client = await pool.connect(); 
        const consulta = {
            name: "get-skater-by-credentials",
            text: "SELECT * FROM skaters WHERE email = $1 AND password = $2",
            values: [email, password]
        };
        const result = await client.query(consulta);
        return result.rows[0];
    } catch (error) {
        console.error('Error durante la conexión o la consulta en getSkater:', error.code, error.stack, error.message);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
};
