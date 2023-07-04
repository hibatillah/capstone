export const Failed = () => {
    return(
        <div className="bg-red-600 rounded-lg px-4 py-2">
            <p className="text-sm text-white">Failed</p>
        </div>
    )
}
export const OnProgress = () => {
    return(
        <div className="bg-orange-600 rounded-lg px-4 py-2">
            <p className="text-sm text-white">On Progress</p>
        </div>
    )
}
export const Complete = () => {
    return(
        <div className="bg-green-600 rounded-lg px-4 py-2">
            <p className="text-sm text-white">Complete</p>
        </div>
    )
}