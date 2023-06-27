import moment from "moment"
import Image from "next/image"
import Link from "next/link"

const FeaturedPostCard = ({ post }) => {
    return (
        <div className="h-72 relative">
            <Link href={`/post/${post.slug}`}>
                <div className="bg-center bg-cover bg-no-repeat shadow-md h-72 w-full rounded-lg" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
                <div className="absolute top-0 bg-center bg-cover bg-gradient-to-b from-gray-400 via-gray-700 to-black h-72 w-full rounded-lg opacity-50" />
                <div className="absolute top-0 flex flex-col align-center w-full h-full justify-center">
                    <p className="text-white mb-4 text-shadow font-semibold text-xs text-center">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </p>

                    <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
                        {post.title}
                    </p>

                    <div className="flex items-center absolute bottom-5 w-full justify-center">
                        <Image
                            alt={post.author.name}
                            height={30}
                            width={30}
                            className="align-middle drop-shadow-lg rounded-full"
                            src={post.author.photo.url}
                        />

                        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FeaturedPostCard