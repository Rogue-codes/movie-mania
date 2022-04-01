import styled from 'styled-components'

const Card = styled.div`
    max-width: 30%;
    height: 80vh;
    position: relative;
    transition: all .5s linear;
    margin-bottom: 4%;
    box-shadow: rgba(253, 251, 251, 0.35) 0px 5px 15px;
    border-radius: 5px;
    &:hover{
        .details{
            opacity: 1;
            transition: all .5s linear;
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    .details{
        position: absolute;
        border-radius: 5px;
        top: 0;
        padding:5% 2%;
        background: #0b011cd9;
        height: 100%;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-y: auto;
        gap: 1%;
        h1{
            color: white;
            font-size: 1.5vw;
            text-align: center;
            padding: 5%;
            background: red;
            border-radius: 5px;
        }
        p{
            color: white;
            font-size: 1.2vw;
            text-align: center;
            line-height: 40px;
        }
        .tag{
            width: 30%;
            height: 6vh;
            display: flex;
            border: none;
            justify-content: center;
            align-items: center;
            font-size: 1.2vw;
            color: white;
            border-radius: 5px;
        }
        .red{
            background-color: red;
        }
        .green{
            background-color: green;
        }
        .orange{
            background-color: orange;
        }
    }
`

const IMG_API = `https://image.tmdb.org/t/p/w1280`
function Movies({overview,poster_path,title,vote_average,setVoteClass,id}) {

  return (
        <Card>
            <img src={IMG_API + poster_path} alt="" />
            <div className='details'>
                <h1>{title}</h1>
                <p>{overview}</p>
                <button className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</button>
            </div>
        </Card>
  )
}

export default Movies