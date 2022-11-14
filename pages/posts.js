import Image from 'next/image'

function PostImg() {
  return (
    <div>
      {
        ['truong', 'bar', 'babi'].map((path) => {
          return (
            <div key={path}>
              <Image src={`/${path}.png`} alt='post' width='200' height='200' />
            </div>
          )
        })
      }
    </div>
  )
}

export default PostImg
